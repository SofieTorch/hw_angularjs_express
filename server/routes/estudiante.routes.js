const express = require('express')
const router = express.Router()

const estudianteCtrl = require('../controllers/estudiante.controller')

router.get('/', estudianteCtrl.getEstudiantes)
router.post('/', estudianteCtrl.createEstudiante)
router.delete('/:id', estudianteCtrl.deleteEstudiante)

module.exports = router
