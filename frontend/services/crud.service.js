app.service('CrudService', function($http) {
    let crudService = {}

    crudService.getData = (type) => {
        return $http({
            url: `http://localhost:3000/api/${type}`,
            method: 'GET'
        })
    }

    crudService.addData = (type, object) => {
        return $http({
            url: `http://localhost:3000/api/${type}`,
            method: 'POST',
            data: JSON.stringify(object)
        })
    }

    crudService.deleteData = (type, id) => {
        return $http({
            url: `http://localhost:3000/api/${type}/${id}`,
            method: 'DELETE'
        })
    }

    return crudService
})