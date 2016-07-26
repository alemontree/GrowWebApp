import angular from 'angular';
import AngularUiRouter from 'angular-ui-router';
// import Datepicker from '/Utils/datepicker'; 


import FormController from './form-controller';
import compareTo from './form-directive';
import FormService from './form-service';


export default angular.module('Form', [AngularUiRouter])
  .controller('formController', FormController)
  // .controller('datepickerDemoCtrl' Datepicker)
  .service('formService', FormService)
  .directive('compareTo', compareTo);
  // .name;
