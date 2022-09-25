const express = require('express')
const router = express.Router()

let {people} = require('../data')

// POST to write data but not update data

// Post via html submit form /public/index.html
router.post('/', (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('The mortal name is inconsequential to the Gods')
})

module.exports = router