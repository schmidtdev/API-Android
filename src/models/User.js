const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address: String,
  number: String,
  city: String
})

module.exports= mongoose.model('User', UserSchema)