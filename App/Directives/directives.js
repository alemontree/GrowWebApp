import angular from 'angular';



let compareTo = function() {
  // this directive checks if the second pw is equal to the first
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            }; 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};

export default angular.module('directives.compareTo', [])
  .directive('compareTo', compareTo)
  .name;
