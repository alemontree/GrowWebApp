"use strict";
import angular from 'angular';
import Datepicker from '../../Utils/datepicker';
import FormService from './form-service';



export default class FormController {
  constructor() {
    this.master = {};
  }
  update(user) {
    console.log("user: ", user);
    this.master = angular.extend(this.master, user);
    console.log("master: ", this.master);
    services.sendRequest(this.master);
  }

  reset() {
    this.user = angular.copy(this.master);
  };

}

// controllers.DatepickerDemoCtrl = Datepicker;
// FormController.$inject



