const User = require('../models/users')
const ResetToken = require('../models/resetToken')

const { isValidObjectId } = require('mongoose')
const { sendError } = require('../utils/helper')

exports.isResetTokenValid = async (req, res, next) => {
  const { token, id } = req.query
  if (!token || !id) return sendError(res, 'Invalid request!')

  if (!isValidObjectId(id)) return sendError(res, 'Invalid user!')

  const user = await User.findById(id)
  if (!user) return sendError(res, 'user not found!')

  const resetToken = await ResetToken.findOne({ owner: user._id })
  if (!resetToken) return sendError(res, 'reset token not found!')

  const isValid = await resetToken.compareToken(token)
  if (!isValid) return sendError(res, 'reset token is invalid!')

  req.user = user
  next()
}
