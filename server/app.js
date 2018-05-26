const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mySql = require('./config/mySqlDB')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// server client files
app.use(express.static(__dirname + "/../dist"))

app.get('/', (req, res) => {
   res.sendFile('/../dist/index.html')
})

//router
app.use('/', require('./routes'))

app.get('*', (req, res) => {
  res.redirect('back')
})

module.exports = app