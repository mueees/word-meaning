(function () {
    'use strict';

    angular.module('seed.mobile.explore').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.explore', {
                url: '/explore',
                templateUrl: 'app/scripts/pages/explore/explore.view.html',
                controller: "ExploreController"
            });
    });

})();