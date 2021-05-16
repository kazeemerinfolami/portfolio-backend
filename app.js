const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()

// import routes
const route = require('./route')

// app middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
if ((process.env.NODE_ENV = 'development')) {
    app.use(cors({ origin: `http://localhost:3000` }))
}
if ((process.env.NODE_ENV = 'production')) {
    app.use(cors({ origin: `https://kazeem-portfolio-n.vercel.app` }))
}
app.use('/api', route)

const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log(`running on port ${port}`);
})