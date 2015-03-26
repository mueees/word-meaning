(function () {
    'use strict';

    angular.module('seed.mobile.list').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.list', {
                url: '/list',
                templateUrl: 'app/scripts/pages/list/list.view.html',
                controller: "ListController"
            });
    });

})();