"use strict";
import angular from 'angular';
// import Datepicker from '../../Utils/datepicker';
import FormService from './form-service';

export default class FormController {
  constructor($scope, formService) {
    this.formService = formService;
    // console.log(this.dt)
    // this.dt = new Date();
    // console.log($scope.dt);
  }

  update(user) {
    
    console.log("user: ", user);
    // this.master = angular.extend(this.master, user);

    // var formService = new FormService;
    // update(user, formService ) {
    // this.formService...

    this.formService.sendRequest(this.user);
  }

  reset() {
    this.user = angular.copy(this.master);
  };

}

// FormController.$inject = ['formService'];

