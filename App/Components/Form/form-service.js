import angular from 'angular';

// angular.module('growWebApp.services', [])


class FormService {
  constructor($http) {
    this.http = $http;
    this.foo = "hell";
    this.master = {};
  }

  sendRequest(user) {
    console.log("sendRequest is called...");
    console.log("user in service: ", user);
//  return $http.post('api/services', user);
    this.master = angular.extend(this.master, user);
    console.log("master in service ", this.master);
    this.http.post('api/services', this.master);

    return user;

  }
  static formFactory($http) {
    return new FormController($http);
  }
}

FormService.formFactory.$inject = ['$http'];

export default FormService;

// export default angular.module('Form', [])
//   .service('formService', FormService);



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

