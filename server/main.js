
const express = require('express')
const app = express()
const fs = require('fs')

const index = fs.readFileSync('frontend/index.html')

// Settings
app.set('port', process.env.PORT || 3000)
app.use(express.static('frontend'))

// Middlewares
app.use(express.json())

// Routes
app.use('/api/docentes', require('./routes/docente.routes'))
app.use('/api/estudiantes', require('./routes/estudiante.routes'))

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(index)
})

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'))
})
