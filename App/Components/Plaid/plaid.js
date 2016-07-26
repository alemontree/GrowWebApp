import angular from 'angular';
import PlaidController from './plaid-controller';

export default angular.module('angular-plaid-link', [])
  .controller('plaidController', PlaidController)
  .provider('plaidLink', [
    function() {
      const configDefaults = {};

      this.init = function(options) {
        console.log('plaid init');
        angular.extend(configDefaults, options);
      };

      // Factory functions
      this.$get = [
        '$rootScope',

        function($rootScope) {
          let handler, onLoadCallback, onSuccessCallback;

          let loaded = false,
            config = {
              onLoad: function() {
                loaded = true;
                _triggerCallback(onLoadCallback);
              },
              onSuccess: function(token) {
                console.log(token);
                _triggerCallback(onSuccessCallback, token);
              }
            };

          function _triggerCallback(callback) {
            if (angular.isFunction(callback)) {
              callback.apply(null, Array.prototype.slice.call(arguments, 1));
            }

            $rootScope.$apply();
          }

          function create(options, success, exit) {
            console.log("create called");
            angular.extend(options, configDefaults);
            options.onSuccess = success || options.onSuccess || function(){};
            options.onExit = exit || options.onExit || function(){};

            if (angular.isDefined(options.onLoad)) {
              onLoadCallback = angular.copy(options.onLoad);
              delete options.onLoad;
            }

            if (angular.isDefined(options.onSuccess)) {
              onSuccessCallback = angular.copy(options.onSuccess);
              delete options.onSuccess;
            }

            angular.extend(config, options);

            handler = Plaid.create(config);

            return handler;
          }

          function isLoaded() {
            console.log('isLoaded');
            return loaded;
          }

          function open(bankType) {
            console.log("open ", bankType);
            handler.open(bankType);
          }

          return {
            create: create,
            isLoaded: isLoaded,
            open: open
          };
        }
      ];

      return this;
    }
  ]);
