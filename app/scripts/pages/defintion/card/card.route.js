(function () {
    'use strict';

    angular.module('seed.mobile.definition.card').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.definition.card', {
                url: '/definition/card',
                templateUrl: 'app/scripts/pages/defintion/card/card.view.html',
                controller: "DefinitionCardController"
            });
    });
})();