const router = require('express').Router()
const { getAllPeople,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
} = require('../Controllers/Person')

router.get('/all', getAllPeople)
router.get('/:id', getPersonById)
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router