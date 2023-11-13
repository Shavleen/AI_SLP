const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//set up server

//calling express using node with express to run server
const app = express()

app.use(bodyParser.json())
