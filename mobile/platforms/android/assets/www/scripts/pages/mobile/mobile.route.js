(function () {
    'use strict';

    angular.module('seed.mobile').config(function ($stateProvider) {
        $stateProvider
            .state('mobile', {
                url: '/mobile',
                templateUrl: 'app/scripts/pages/mobile/mobile.view.html',
                controller: "MobileController"
            });
    });

})();