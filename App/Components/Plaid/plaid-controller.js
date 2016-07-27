"use strict";
import angular from 'angular';


export default class PlaidController{
  constructor(plaidLink, formService) {
    this.plaidLink = plaidLink;
    this.formService = formService;
    let self = this;
    this.token = '';
    this.plaidIsLoaded = this.plaidLink.isLoaded;
    this.plaidLink.create({
      onSuccess: function(token) {
        console.log(token);
        console.log(self.token);
        self.token = token;
        self.formService.sendRequest(self.token);
      },
      onExit: function() {
        console.log('user closed');
      }
    });
    console.log("plaidlink initialized");
  }


  openPlaid(bankType) {
    console.log('ctrl openPlaid', bankType);
    this.plaidLink.open(bankType);
  }
}




// function($scope, plaidLink) {
//             $scope.token = '';
//             $scope.plaidIsLoaded = plaidLink.isLoaded;

//             plaidLink.create({
//                 onSuccess: function(token) {
//                     $scope.token = token;
//                 },
//                 onExit: function() {
//                     console.log('user closed');
//                 }
//             });

//             $scope.openPlaid = function(bankType) {
//                 plaidLink.open(bankType);
//             };
//         }

// }

