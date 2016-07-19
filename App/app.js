'use strict';
import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
import AngularAnimate from 'angular-animate';
import "../grow.css";
import plaid from 'angular-plaid-link';
import AngularBootstrap from 'angular-ui-bootstrap';
import Form from './Components/Form/form';

"use strict";
// import Datepicker from './Utils/datepicker';
// import GrowService from './Services/services';
// import FormController from './Controllers/controllers';
// import compareTo from './Directives/directives';


angular.module('growWebApp', [
        // frameworks
        AngularUiRouter,
        AngularAnimate,
        AngularBootstrap,

        // components
        Form

  ])




growWebApp.config(['$stateProvider', '$urlRouterProvider', 
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
      controller: 'FormController',
      template: require("./Partials/view8.html")
    })
    }
  ]
);                                               


angular.element(document).ready(() => {
  angular.bootstrap(document, ['growWebApp']);
})
