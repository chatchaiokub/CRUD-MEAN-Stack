/* global alert, angular */
angular.module('CRUDApp', [])
  .controller('CRUDCtrl', function ($scope, $http) {
    $scope.Array = []
    $scope.showEdit = false
    $scope.index = ''
    // ------------------------------ Function ---------------------------------
    var GetData = function () {
      $http.get('/api').then(function (response) {
        $scope.Array = response.data
      })
    }
    GetData()
    $scope.addData = function (data) {
      $http.post('/api').then(function (response) {
        $scope.Array.push(response.data)
        $scope.data = ''
      })
    }
    $scope.editData = function (item, index) {
      $scope.showEdit = true
      $scope.index = index
      $scope.NAME = item.name
      $scope.AGE = item.age
      $scope.COUNTRY = item.country
    }
    $scope.updateData = function (NAME, AGE, COUNTRY) {
      $scope.Array[$scope.index].name = $scope.NAME
      $scope.Array[$scope.index].age = $scope.AGE
      $scope.Array[$scope.index].country = $scope.COUNTRY
      $scope.showEdit = false
    }
    $scope.deleteData = function (id, index) {
      alert('delete')
      $scope.Array.splice(index, 1)
    }
  })
