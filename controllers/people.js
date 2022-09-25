
let {people} = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name) {
        return res
            .status(400)
            .json({success: false, msg: 'please provide a name value'})
    }
    res.status(201).send({success: true, person: name})
}

const createPersonPostman = (req, res) => {
    const {name} = req.body
    //callback for status 400
    if(!name) {
        return res
            .status(400)
            .json({ success: false, msg: 'Porvide a legendary name' })
    }
    res.status(201).send({success: true, data: [...people, name]})
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    // console.log(id, name);
    // res.send('Maserful presence')
    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        return res
            .status(400)
            .json({success: false, msg: 'The legend of ${id} is inconsequential'})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true, data: newPeople})
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))

    if(!person) {
        return res
            .status(404)
            .json({success: false, msg: `The legend of ${req.params.id} is inconsequential`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}