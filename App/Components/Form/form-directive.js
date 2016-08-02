import angular from 'angular';



  // this directive checks if the second pw is equal to the first
export default function compareTo()  {
  return {
    require: "ngModel",
    // controller: formController,
    // controllerAs: 'formCtrl',
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function(scope, element, attributes, ngModel) {
      
      console.log("directive firing");
      console.log(ngModel.$validate);
      ngModel.$validators.compareTo = function(modelValue) {
        console.log(modelValue, scope.otherModelValue);
        return modelValue === scope.otherModelValue;
      }; 
      scope.$watch("otherModelValue", function() {
        ngModel.$validate();
      });
    }
  };
};

// export default compareTo;

// export default angular.module('directives.compareTo', [])
//   .directive('compareTo', compareTo)
//   .name;
