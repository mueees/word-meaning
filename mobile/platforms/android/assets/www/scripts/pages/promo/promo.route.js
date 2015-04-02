(function () {
    'use strict';

    angular.module('seed.promo').config(function ($stateProvider) {
        $stateProvider
            .state('main.promo', {
                url: '/promo',
                templateUrl: 'app/scripts/pages/promo/promo.view.html',
                controller: 'PromoController'
            });
    });

})();