const express = require('express')
const router = express.Router()
const controller = require('../Controller/dev_controller')


router.get('/', controller.getDevs)
router.get('/:id', controller.getDevsById)
router.post('/' ,controller.createDevs)
router.put('/', controller.updateDevs)


module.exports = router