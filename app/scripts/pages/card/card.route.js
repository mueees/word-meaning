(function () {
    'use strict';

    angular.module('seed.mobile.card').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.card', {
                url: '/card',
                views: {
                    content: {
                        templateUrl: 'app/scripts/pages/card/card.view.html',
                        controller: "CardController"
                    }
                }
            });
    });

})();