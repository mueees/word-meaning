(function () {
    'use strict';

    angular.module('seed.mobile').controller('MobileController', function ($scope, seedBladeManager, $timeout) {

        seedBladeManager.setLeftConfig({
            templateUrl: 'app/scripts/core/menu/main/menu.view.html',
            data: {
                items: [{
                    name: 'First'
                }, {
                    name: 'Second'
                }]
            }
        });

    });
})();