let myApp = angular.module('growWebApp', []);

myApp.factory('myFactory', function($http) {
  let foo = "hello";
  let factory = {};
  
  factory.sendRequest = function() {
    console.log(foo);
    return foo;
  }

  return factory;
});


let controllers = {};
controllers.formController = function ($scope, myFactory) { 
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    myFactory.sendRequest();
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();

}


myApp.controller(controllers);
