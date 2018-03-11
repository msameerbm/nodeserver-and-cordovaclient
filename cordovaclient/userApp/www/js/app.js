angular
.module('myApp', [])
.controller('myController', function ($scope, $http) {
  console.log('myController working');
  // get users
  $http({
    method: 'GET',
    url: 'https://sameernodeapp.herokuapp.com/api/getuser'
  }).then(function (response) {
    console.log('response of contact:', response);
    $scope.users = response.data;
  }).catch(function (response) {
    console.log('error:', response);
    });

  // to add user
  $scope.employees = {
    firstname: '',
    lastname: '',
    email: ''
  }
  $scope.addUser = function () {
    $http.post('https://sameernodeapp.herokuapp.com/api/adduser', $scope.employees).then(function (response) {
      $('#myModal').modal('hide');
      alert('Success');
      window.location.href = 'index.html'
    });
  }

});