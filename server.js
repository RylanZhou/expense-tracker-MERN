const path = require('path')
const express = require('express')
const dotenv = require('dotenv')

const connectDB = require('./config/db')
const transactions = require('./routes/transactions')

dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json()) // Allow us to use the body parser.

app.use('/api/v1/transactions', transactions)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  // Any requests EXCEPT the api routes above
  app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
