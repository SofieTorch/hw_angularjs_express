const express = require('express')
const router = express.Router()

const docenteCtrl = require('../controllers/docente.controller')

router.get('/', docenteCtrl.getDocentes)
router.post('/', docenteCtrl.createDocente)
router.delete('/:id', docenteCtrl.deleteDocente)

module.exports = router
