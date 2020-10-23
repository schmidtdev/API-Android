const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://android:yi0irXZDk09behIr@persite-9buxn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())
app.use(cors())

app.use(routes)

app.get('/', (req, res) => {
  res.json({ message: 'Hello' })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(PORT)
})