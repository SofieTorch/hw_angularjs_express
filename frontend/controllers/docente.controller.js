app.controller('DocenteController', function($scope, CrudService) {
    $scope.docente = new Docente()
    $scope.docentes = new Array()

    angular.element(document).ready(() => {
        $scope.mostrarDocentes()
    })

    $scope.mostrarDocentes = () => {
        CrudService.getData('docentes').then( (res) => {
            $scope.docentes = res.data
        })
    }

    $scope.agregarDocente = (isValid) => {
        if(isValid) {
            CrudService.addData('docentes', $scope.docente).then( (res) => {
                $scope.mostrarDocentes()
                $scope.docente = new Docente()
            })
        }
    }

    $scope.eliminarDocente = (id) => {
        CrudService.deleteData('docentes', id).then( (res) => {
            $scope.mostrarDocentes()
        })
    }

})
