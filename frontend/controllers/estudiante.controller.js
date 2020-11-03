app.controller('EstudianteController', function($scope, CrudService) {
    $scope.estudiante = new Estudiante()
    $scope.estudiantes = new Array()
    $scope.showAlert = false
    $scope.noData = true

    angular.element(document).ready(() => {
        $scope.mostrarEstudiantes()
    })

    $scope.mostrarEstudiantes = () => {
        CrudService.getData('estudiantes').then( (res) => {
            $scope.estudiantes = res.data
            $scope.noData = !($scope.estudiantes.length > 0)
        })
    }

    $scope.agregarEstudiante = (isValid) => {
        if(isValid) {
            CrudService.addData('estudiantes', $scope.estudiante).then( (res) => {
                $scope.mostrarEstudiantes()
                $scope.showAlert = true
                $scope.estudiante = new Estudiante()
            })
        }
    }

    $scope.eliminarEstudiante = (id) => {
        CrudService.deleteData('estudiantes', id).then( (res) => {
            $scope.mostrarEstudiantes()
        })
    }

    $scope.hideAlert = () => $scope.showAlert = false

})