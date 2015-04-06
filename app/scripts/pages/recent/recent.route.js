(function () {
    'use strict';

    angular.module('seed.mobile.recent').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.recent', {
                url: '/recent',
                views: {
                    header: {
                        templateUrl: "app/scripts/core/header/header.view.html",
                        controller: "HeaderRecentController"
                    },
                    content: {
                        templateUrl: 'app/scripts/pages/recent/recent.view.html',
                        controller: "RecentController"
                    }
                }
            });
    });

})();