"use strict";
import angular from 'angular';
import Datepicker from '../../Utils/datepicker';
import FormService from './form-service';

export default class FormController {
  constructor(formService) {
    this.master = {};
    this.service = new FormService;
  }
  update(user) {

    // console.log("user: ", user);
    this.master = angular.extend(this.master, user);
    console.log("master: ", this.master);
    // console.log(this.service);

    console.log(typeof this.service.sendRequest)
    this.service.sendRequest(this.master);
  }

  reset() {
    this.user = angular.copy(this.master);
  };

}

FormController.$inject = ['formService'];

