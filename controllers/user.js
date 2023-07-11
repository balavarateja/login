const User = require('../models/users')
const VerificationToken = require('../models/verificationToken')
const ResetToken = require('../models/resetToken')
const { sendError, createRandomBytes } = require('../utils/helper')

const crypto = require('crypto')

const jwt = require('jsonwebtoken')
const {
  generateOTP,
  mailTransport,
  generateEmailTemplate,
  plainEmailTemplate,
  generatePasswordResetTemplate,
  passwordResetSuccessfullTemplate,
} = require('../utils/mail')
const { isValidObjectId } = require('mongoose')
const verificationToken = require('../models/verificationToken')

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber } = req.body

  const user = await User.findOne({ email })
  if (user) return sendError(res, 'email already exists!')

  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
  })

  const OTP = generateOTP()
  const verificationToken = new VerificationToken({
    owner: newUser._id,
    token: OTP,
  })

  await verificationToken.save()
  await newUser.save()

  mailTransport().sendMail({
    from: 'emailverification@email.com',
    to: newUser.email,
    subject: 'Verify your email account',
    html: generateEmailTemplate(OTP),
  })

  res.send(req.body)
}

exports.signIn = async (req, res) => {
  const { email, password } = req.body

  if (!email.trim() || !password.trim())
    return sendError(res, 'email or password missing!')

  const user = await User.findOne({ email })
  if (!user) return sendError(res, 'user not found')

  const isMatched = await user.comparePassword(password)
  if (!isMatched) return sendError(res, 'email/password do not match')

  const token = jwt.sign({ userID: user._Id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })

  res.json({
    success: true,
    user: { name: user.name, email: user.email, id: user._id, token: token },
  })
}

exports.verifyEmail = async (req, res) => {
  const { userId, otp } = req.body
  if (!userId || !otp.trim())
    return sendError(res, 'Invalid request, missing parameters!')

  if (!isValidObjectId(userId)) return sendError(res, 'Invalid userId')

  const user = await User.findById(userId)
  if (!user) return sendError(res, 'sorry! user not found')

  if (user.verified) return sendError(res, 'This account is already verified')

  const token = await VerificationToken.findOne({ owner: user._id })
  if (!token) return sendError(res, 'sorry! user not found')

  const isMatched = await token.compareToken(otp)
  if (!isMatched) return sendError(res, 'please provide valid otp')

  user.verified = true

  await VerificationToken.findByIdAndDelete(token._id)
  await user.save()

  mailTransport().sendMail({
    from: 'emailverification@email.com',
    to: user.email,
    subject: 'Verify your email account',
    html: plainEmailTemplate(),
  })
}

exports.forgotPassword = async (req, res) => {
  const { email } = req.body
  if (!email) return sendError(res, 'please enter a valid email!')

  const user = await User.findOne({ email })
  if (!user) return sendError(res, 'Invalid request!')

  const token = await ResetToken.findOne({ owner: user._id })
  if (token)
    return sendError(res, 'Another token can only be generated after one hour!')

  const RandomBytes = await createRandomBytes()
  const resetToken = new ResetToken({ owner: user._id, token: RandomBytes })

  await resetToken.save()
  mailTransport().sendMail({
    from: 'emailverification@email.com',
    to: user.email,
    subject: 'password reset',
    html: generatePasswordResetTemplate(),
  })

  res.json({ success: true, message: 'password reset link sent to your mail' })
}

exports.resetPassword = async (req, res) => {
  const { password } = req.body

  const user = await User.findById(req.user._id)
  if (!user) return sendError(res, 'User not found!')

  const isSamePassword = await user.comparePassword(password)
  if (isSamePassword) return sendError(res, 'password cannot be the same')

  if (password.trim().length < 8 || password.trim().length > 20)
    return sendError(res, 'password must be within 8 to 20 characters')

  user.password = password.trim()
  await user.save()

  await ResetToken.findOneAndDelete({ owner: user._id })

  mailTransport().sendMail({
    from: 'emailverification@email.com',
    to: user.email,
    subject: 'password reset successful',
    html: passwordResetSuccessfullTemplate(),
  })

  res.json({ success: true, message: 'password reset successful!' })
}
