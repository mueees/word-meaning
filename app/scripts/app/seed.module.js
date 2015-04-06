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
        'seed.mobile.list',
        'seed.mobile.recent'
    ];

    angular.module('seed', inject);

    function bootstrapAngular() {
        var domElement = document.querySelector('body');

        angular.element(document).ready(function() {
            angular.bootstrap(domElement, ['seed']);
        });
    }

    if (navigator.userAgent.match(/(iOS|iPhone|iPod|iPad|Android|BlackBerry)/)) {
        document.addEventListener("deviceready", bootstrapAngular, false);
    } else {
        bootstrapAngular();
    }

})();