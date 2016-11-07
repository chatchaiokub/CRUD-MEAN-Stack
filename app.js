/* global alert, angular */
angular.module('CRUDApp', [])
  .controller('CRUDCtrl', function ($scope, $http) {
    $scope.Array = []
    $scope.showEdit = false
    $scope.index = ''
    // ------------------------------ Function ---------------------------------
    $scope.addData = function (data) {
      $scope.Array.push(data)
      $scope.data = ''
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
