import angular from 'angular';
import UIrouter from 'angular-ui-router';
import "../grow.css";
import plaid from 'angular-plaid-link';
import UIbootstrap from 'angular-ui-bootstrap';
import Datepicker from './Utils/datepicker';

const growApp = angular.module('growWebApp', [
                                              UIrouter,
                                              UIbootstrap
                                              ]
                              );

growApp.factory('myFactory', ($http) => {
  let foo = "hello";
  let factory = {};

  factory.sendRequest = function(user) {
    console.log(user);
    // return $http.post('/services', user);
    return user;
  }
  return factory;
});

let directives = {};


directives.compareTo = function() {
  // this directive checks if the second pw is equal to the first
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};


let controllers = {};
controllers.formController = function($scope, myFactory) { 
  $scope.master = {};

  $scope.update = function(user) {
    console.log("user: ", user);
    console.log("master: ", master);
    $scope.master = angular.copy(user);
    myFactory.sendRequest(user);
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();
};

controllers.DatepickerDemoCtrl = Datepicker;

growApp.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/1");
  $stateProvider
    .state('view1',
    {
      url: '/1',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view1.html")
    })
    .state('view2',
    {
      url: '/2',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view2.html")
    })
    .state('view3',
    {
      url: '/3',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view3.html")
    })
    .state('view4',
    {
      url: '/4',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view4.html")
    })
    .state('view5',
    {
      url: '/5',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view5.html")
    })
    .state('view6',
    {
      url: '/6',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view6.html")
    })
    .state('view7',
    {
      url: '/7',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view7.html")
    })
    .state('view8',
    {
      url: '/8',
      transclude: true,
      controller: 'formController',
      template: require("./Partials/view8.html")
    })
    }
  ]
);                                               
growApp.directive(directives);
growApp.controller(controllers);
