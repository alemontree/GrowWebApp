import angular from 'angular';
import PlaidController from './plaid-controller';
import AngularPlaidLink from 'angular-plaid-link';


export default angular.module('Plaid', [AngularPlaidLink])
    .controller('plaidController', PlaidController);
