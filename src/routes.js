const express = require('express')
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')

const routes = express.Router()

routes.post('/login', UserController.login)

// Users

  routes.post('/registerUser', UserController.store)

  routes.get('/users', UserController.index)

  routes.post('/destroyUser', UserController.destroy)

  routes.get('/findToEdit', UserController.find)

  routes.post('/editUser', UserController.update)

// Products

  routes.post('/registerItem', ProductController.store)

  routes.get('/items', ProductController.index)

  routes.post('/destroyItem', ProductController.destroy)

  routes.get('/findProductToEdit', ProductController.find)

  routes.post('/editProduct', ProductController.update)

module.exports = routes