const angular = require('angular');
const router = require('angular-ui-router');
const growApp = angular.module('growWebApp', ['router']);

growApp.factory('myFactory', function($http) {
  let foo = "hello";
  let factory = {};

  factory.sendRequest = function(user) {
    console.log(user);
    // return $http.post('/services', user);
    return user;
  }

  return factory;
});


let controllers = {};
controllers.formController = function ($scope, myFactory) { 
  $scope.master = {};

  $scope.update = function(user) {
    console.log(user);
    console.log(user.email);
    $scope.master = angular.copy(user);
    myFactory.sendRequest(user);
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
};

growApp.config(function($stateProvider, $urlRouterProvider) {


}                                                      

growApp.controller(controllers);
