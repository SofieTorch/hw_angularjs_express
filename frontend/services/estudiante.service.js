app.service('EstudianteService', function($http) {
    let estudianteService = {}

    estudianteService.getEstudiantes = () => {
        return $http({
            url: 'http://localhost:3000/api/estudiantes',
            method: 'GET'
        })
    }

    estudianteService.addEstudiante = (estudiante) => {
        return $http({
            url: 'http://localhost:3000/api/estudiantes',
            method: 'POST',
            data: JSON.stringify(estudiante)
        })
    }

    estudianteService.deleteEstudiante = (id) => {
        return $http({
            url: `http://localhost:3000/api/estudiantes/${id}`,
            method: 'DELETE'
        })
    }

    return estudianteService
})