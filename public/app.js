/* global alert, angular */
angular.module('CRUDApp', [])
  .controller('CRUDCtrl', function ($scope, $http) {
    $scope.Array = []
    $scope.showEdit = false
    $scope.index = ''
    $scope.id = ''
    // ------------------------------ Function ---------------------------------
    var GetData = function () {
      $http.get('/api').then(function (response) {
        $scope.Array = response.data
      })
    }
    GetData()
    $scope.addData = function (data) {
      $http.post('/api', data).then(function (response) {
        $scope.Array.push(response.data)
        $scope.data = ''
      })
    }
    $scope.editData = function (id, index) {
      $http.get('/api/' + id).then(function (response) {
        console.log(response.data)
        $scope.showEdit = true
        $scope.index = index
        $scope.id = id
        $scope.NAME = response.data.name
        $scope.AGE = response.data.age
        $scope.COUNTRY = response.data.country
      })
    }
    $scope.updateData = function (NAME, AGE, COUNTRY) {
      var NewData = {NAME, AGE, COUNTRY}
      $http.put('/api/' + $scope.id, NewData).then(function (response) {
        console.log(response.data)
        $scope.Array[$scope.index].name = response.data.name
        $scope.Array[$scope.index].age = response.data.age
        $scope.Array[$scope.index].country = response.data.country
        $scope.showEdit = false
      })
    }
    $scope.deleteData = function (id, index) {
      $http.delete('/api/' + id).then(function (response) {
        alert('Deleted !')
        $scope.Array.splice(index, 1)
      })
    }
  })
