import angular from 'angular';

// angular.module('growWebApp.services', [])

let moduleName = 'Form';

class FormService {
  constructor($http) {
    this.$http = $http;
    this.foo = "hell";
    this.master = {};
  }

  sendRequest(user) {
    console.log("sendRequest is called...");
    console.log(user);
//  return $http.post('api/services', user);
    this.master = angular.extend(this.master, user);
    console.log(this.master);


    return user;

  }
  static formFactory($http) {
    return new FormController($http);
    }
}

FormService.formFactory.$inject = ['$http'];

angular.module(moduleName, [])
  .factory('formService', FormService.formFactory);

export default moduleName;

// class FormServiceFactory {
//   constructor(user) {
//     this.user = user;

//   }
//   newFormService() {
//     return 
//   }
// }

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

