var app = angular.module('academicSystem', ['ngRoute'])

app.config( ($routeProvider) => {
    $routeProvider
        .when('/', {
            templateUrl: './views/home.html'
        })
        .when('/registros', {
            templateUrl: './views/registros/registros.html'
        })
        .when('/registros/docentes', {
            templateUrl: './views/registros/registrosDocentes.html',
            controller: 'DocenteController'
        })
        .when('/registros/estudiantes', {
            templateUrl: './views/registros/registrosEstudiantes.html',
            controller: 'EstudianteController'
        })
        .when('/agregar', {
            templateUrl: './views/agregar/agregar.html'
        })
        .when('/agregar/docente', {
            templateUrl: './views/agregar/agregarDocente.html',
            controller: 'DocenteController'
        })
        .when('/agregar/estudiante', {
            templateUrl: './views/agregar/agregarEstudiante.html',
            controller: 'EstudianteController'
        })
})
