(function () {
    'use strict';
    angular.module('seed').config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise("/mobile");
    });
})();