const express = require('express')
const router = express.Router()
const controller = require('../Controller/game_controller')


router.get('/', controller.getGames)
router.get('/:id', controller.getGameId)
router.post('/' ,controller.createGame)
router.put('/:id', controller.updateGame)


module.exports = router