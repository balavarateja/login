const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  verified: {
    type: Boolean,
    default: false,
    require: true,
  },
})

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hash = await bcrypt.hash(this.password, 8)
    this.password = hash
  }

  next()
})

userSchema.methods.comparePassword = async function (password) {
  const result = await bcrypt.compareSync(password, this.password)
  return result
}

module.exports = mongoose.model('User', userSchema)
