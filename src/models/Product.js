const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  storage: String,
  price: String
})

module.exports= mongoose.model('Product', ProductSchema)