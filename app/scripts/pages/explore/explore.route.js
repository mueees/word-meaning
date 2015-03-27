(function () {
    'use strict';

    angular.module('seed.mobile.explore').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.explore', {
                url: '/explore',
                views: {
                    header: {
                        templateUrl: "app/scripts/core/header/header.view.html",
                        controller: "HeaderExploreController"
                    },
                    content: {
                        templateUrl: 'app/scripts/pages/explore/explore.view.html',
                        controller: "ExploreController"
                    }
                }
            });
    });
})();