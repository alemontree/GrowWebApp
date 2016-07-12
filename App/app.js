import angular from 'angular';
import UIrouter from 'angular-ui-router';
import "../grow.css";
import plaid from 'angular-plaid-link';
import UIbootstrap from 'angular-ui-bootstrap';


const growApp = angular.module('growWebApp', [
                                              UIrouter,
                                              UIbootstrap
                                              ]);

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
controllers.formController = function($scope, myFactory) { 
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

controllers.DatepickerDemoCtrl = function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  let afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    let date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0,0,0,0);

      for (let i = 0; i < $scope.events.length; i++) {
        let currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
};

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
    }
  ]
);                                               

growApp.controller(controllers);
