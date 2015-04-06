(function () {
    'use strict';

    angular.module('seed.mobile.random').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.random', {
                url: '/random',
                views: {
                    header: {
                        templateUrl: "app/scripts/core/header/header.view.html",
                        controller: "HeaderRandomController"
                    },
                    content: {
                        templateUrl: 'app/scripts/pages/random/random.view.html',
                        controller: "RandomController"
                    }
                }
            });
    });

})();