const User = require('../models/User')

module.exports = {
  async index(req, res) {
    const users = await User.find()

    return res.json(users)
  },

  async store(req, res) {
    const {username, email, password, address, number, city} = req.body

    let user = await User.findOne({ email })

    if(!user) {
      user = await User.create({
        username,
        email,
        password,
        address,
        number,
        city
      })

      return res.json(user)
    }else {
      return null
    }
  },

  async login(req, res) {
    const {email, password} = req.body

    let user = await User.findOne({ email, password })

    if(!user) {
      return null
    }

    return res.json(user)
  },

  async destroy(req, res) {
    const {_id} = req.body

    let user = await User.deleteOne({ _id })

    if(user) {
      return true
    }

    return null
  },

  async find(req, res) {
    const {_id} = req.body

    let user = await User.findOne({_id})

    if(!user) {
      return null
    }

    return res.json(user)
  },

  async update(req, res) {
    const {_id} = req.body

    if(await User.updateOne({ _id })) {
      return true
    }

    return null
  }
}