'use strict';
import angular from 'angular';
import UIrouter from 'angular-ui-router';
import "../grow.css";
import plaid from 'angular-plaid-link';
import UIbootstrap from 'angular-ui-bootstrap';
import Datepicker from './Utils/datepicker';
import GrowService from './Services/services';
import FormController from './Controllers/controllers';
import compareTo from './Directives/directives';

const growApp = angular.module('growWebApp', [
                                              UIrouter,
                                              UIbootstrap,
                                              FormController,
                                              GrowService,
                                              compareTo
                                              // growWebApp.services,
                                              // growWebApp.directives,
                                              // growWebApp.controllers
                                              ]
                              );



growApp.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/1");
  $stateProvider
    .state('view1',
    {
      url: '/1',
      transclude: true,
      controller: 'FormController',
      template: require("./Partials/view1.html")
    })
    .state('view2',
    {
      url: '/2',
      transclude: true,
      controller: 'FormController',
      template: require("./Partials/view2.html")
    })
    .state('view3',
    {
      url: '/3',
      transclude: true,
      controller: 'FormController',
      template: require("./Partials/view3.html")
    })
    .state('view4',
    {
      url: '/4',
      transclude: true,
      controller: 'FormController',
      template: require("./Partials/view4.html")
    })
    .state('view5',
    {
      url: '/5',
      transclude: true,
      controller: 'FormController',
      template: require("./Partials/view5.html")
    })
    .state('view6',
    {
      url: '/6',
      transclude: true,
      controller: 'FormController',
      template: require("./Partials/view6.html")
    })
    .state('view7',
    {
      url: '/7',
      transclude: true,
      controller: 'FormController',
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
// growApp.directive(directives);
// growApp.controller(controllers);

// controllers();
// services();
// directives();
