app.service('DocenteService', function($http) {
    let docenteService = {}

    docenteService.getDocentes = () => {
        return $http({
            url: 'http://localhost:3000/api/docentes',
            method: 'GET'
        })
    }

    docenteService.addDocente = (estudiante) => {
        return $http({
            url: 'http://localhost:3000/api/docentes',
            method: 'POST',
            data: JSON.stringify(estudiante)
        })
    }

    docenteService.deleteDocente = (id) => {
        return $http({
            url: `http://localhost:3000/api/docentes/${id}`,
            method: 'DELETE'
        })
    }

    return docenteService
})