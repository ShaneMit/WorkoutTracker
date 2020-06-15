require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const { join } = require('path')
const app = express()


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(require('./routes'))

app.get('/exercise', (req, res) => {
  res.sendFile(join(__dirname, './public/exercise.html'))
})

app.get('/stats', (req, res) => {
  res.sendFile(join(__dirname, './public/stats.html'))
})

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'))
})

require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.error(err))