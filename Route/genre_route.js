const express = require('express')
const router = express.Router()
const controller = require('../Controller/genre_controller')


router.get('/', controller.getGenre)
router.get('/:id', controller.getGenreId)   
router.post('/' ,controller.createGenre)
router.put('/', controller.updateGenre)


module.exports = router