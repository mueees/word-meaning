var seed = seed || {};
(function () {
    'use strict';

    var inject = [
        'templates-app',
        'ui.router',
        'ngSanitize',
        'angular-growl',

        //pages
        'seed.promo',
        'seed.mobile.explore'
    ];
    angular.module('seed', inject);

})();