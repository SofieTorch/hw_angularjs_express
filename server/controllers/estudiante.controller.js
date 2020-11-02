const estudianteCtrl = {}

estudianteCtrl.estudiantes = new Array()

estudianteCtrl.getEstudiantes = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(estudianteCtrl.estudiantes))
}

estudianteCtrl.createEstudiante = (req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    estudianteCtrl.estudiantes.push(req.body)
    res.end('Ok')
}

estudianteCtrl.deleteEstudiante = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    estudianteCtrl.estudiantes.splice(req.params.id, 1)
    res.end('Ok')
}

module.exports = estudianteCtrl

