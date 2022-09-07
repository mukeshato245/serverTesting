const express = require('express')
require('dotenv').config()
const db = require('./database/connection')

// middleware
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const DemoRoute = require('./routes/demoRoute')
const ContactRoute = require('./routes/contactRoute')

const port = process.env.PORT || 8000
const app = express()

//middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// routes
app.use(DemoRoute)
app.use('/api',ContactRoute)

app.listen(port,()=>{console.log(`Server Started at ${port}`)})