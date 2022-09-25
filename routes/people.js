const express = require('express')
// Initiate Router
const router = express.Router()
// Import controllers from ../controllers/people
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')
// GET method to read data
router.get('/', getPeople)
// POST method via js Axios
router.post('/', createPerson)
// Postman example
router.post('/postman', createPersonPostman)
// PUT a method to UPDATE data
router.put('/:id', updatePerson)
//DELETE method to delete data
router.delete('/:id', deletePerson)

module.exports = router
