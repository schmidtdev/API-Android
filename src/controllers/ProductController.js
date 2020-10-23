const Product = require('../models/Product')

module.exports = {
  async index(req, res) {
    const products = await Product.find()

    return res.json(products)
  },

  async store(req, res) {
    const {title, description, storage, price} = req.body

    let product = await Product.findOne({ title })

    if(!product) {
      product = await Product.create({
        title,
        description,
        storage,
        price
      })

      return res.json(product)
    }else {
      return null
    }
  },

  async destroy(req, res) {
    const {_id} = req.body

    let product = await Product.deleteOne({ _id })

    if(product) {
      return true
    }

    return null
  },

  async find(req, res) {
    const {_id} = req.params._id

    let product = await Product.findById(_id)

    if(!product) {
      return null
    }

    return res.json(product)
  },

  async update(req, res) {
    const {_id} = req.params._id

    if(await Product.updateOne({ _id })) {
      return true
    }

    return null
  }
}