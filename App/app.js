import angular from 'angular';
import uirouter from 'angular-ui-router';
const growApp = angular.module('growWebApp', [uirouter]);
import "../grow.css";
import plaid from 'angular-plaid-link';

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

growApp.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('view1',
    {
      url: '/',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view1.html")
    })
    .state('view2',
    {
      url: '/',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view2.html")
    })
    }
  ]
);                                               

growApp.controller(controllers);
