import angular from 'angular';

// angular.module('growWebApp.services', [])

export default class FormService {
  constructor($http) {
    this.$http = $http;
    this.foo = "hell";
  }

  sendRequest(user) {
    console.log(user);
//     // return $http.post('api/services', user);
//     return user;
  }

}
FormService.$inject = ['$http'];

// export default angular.module('services.growService', [])
//   .service('growService', GrowService)
//   .name;

// 
// factory('myFactory', ($http) => {
//   let foo = "hello";

//   let factory = {};

//   factory.sendRequest = function(user) {
//     console.log(user);
//     // return $http.post('/services', user);
//     return user;
//   }
//   return factory;
// });



// growApp.factory('myFactory', ($http) => {
//   let foo = "hello";
//   let factory = {};

//   factory.sendRequest = function(user) {
//     console.log(user);
//     // return $http.post('/services', user);
//     return user;
//   }
//   return factory;
// });

