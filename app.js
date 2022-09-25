const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// a middleware for static assets. Available to the public
app.use(express.static('./methods-public'))

// parse form submission data
app.use(express.urlencoded({ extended: false }))
// parse incoming json data
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

// Create server
app.listen(5000, () => {
    console.log("The Demiurge gazes through the void with 5000 eyes...")
})