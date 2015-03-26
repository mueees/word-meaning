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
        'seed.mobile.explore',
        'seed.mobile.list'
    ];
    angular.module('seed', inject);

})();