const docenteCtrl = {}

docenteCtrl.docentes = new Array()

docenteCtrl.getDocentes = (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(docenteCtrl.docentes))
}

docenteCtrl.createDocente = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    docenteCtrl.docentes.push(req.body);
    res.end('Ok')
}

docenteCtrl.deleteDocente = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    docenteCtrl.docentes.splice(req.params.id, 1);
    res.end('Ok')
}


module.exports = docenteCtrl
