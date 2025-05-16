const express = require('express')
const router = express.Router()
const controller = require('./Controller/game_controller')


router.get('/', controller.getGames, controller.getGameId)

router.post('/' ,controller.createGame)
router.put(game)


module.exports(Route)