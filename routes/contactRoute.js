const express = require('express')
const { addContact } = require('../controllers/contactController')
const { contactRules, validate } = require('../validation')
const router = express.Router()

router.post('/addcontact', contactRules, validate, addContact)

module.exports = router