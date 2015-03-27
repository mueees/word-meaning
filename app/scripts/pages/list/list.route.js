(function () {
    'use strict';

    angular.module('seed.mobile.list').config(function ($stateProvider) {
        $stateProvider
            .state('mobile.list', {
                url: '/list',
                views: {
                    header: {
                        templateUrl: "app/scripts/core/header/header.view.html",
                        controller: "HeaderListController"
                    },
                    content: {
                        templateUrl: 'app/scripts/pages/list/list.view.html',
                            controller: "ListController"
                    }
                }
            });
    });

})();