const express = require('express')
const router = express.Router()
const playerSvc = require('../controllers/player')

router.post('/arena', playerSvc.arena)

module.exports = router