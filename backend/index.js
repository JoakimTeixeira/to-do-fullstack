// Import libraries
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
// Run dotenv locally
require('dotenv').config()

// Setup express
const app = express()

// Setup middleware
app.use(express.json())
app.use(cors())

// Setup port
const PORT = process.env.PORT || 3001

// Start server
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))

// Setup mongoose
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to Mongo!')
}).catch((error) => {
  console.error('Error connecting to Mongo', error)
})
