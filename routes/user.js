const router = require('express').Router()
// const { check } = require('express-validator')
const {
  createUser,
  signIn,
  verifyEmail,
  forgotPassword,
  resetPassword,
} = require('../controllers/user')
const { isResetTokenValid } = require('../middleware/user')
const { validateUser, validate } = require('../middleware/validator')

router.post('/signup', validateUser, validate, createUser)
router.post('/signIn', signIn)
router.post('/verify-email', verifyEmail)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password', isResetTokenValid, resetPassword)

module.exports = router
