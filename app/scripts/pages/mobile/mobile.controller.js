(function () {
    'use strict';

    angular.module('seed.mobile').controller('MobileController', function ($scope, seedBladeManager, $timeout) {
        $timeout(function () {
            seedBladeManager.expandLeftBlade();
        }, 500);

        $timeout(function () {
            seedBladeManager.collapseLeftBlade();
        }, 1500);

        seedBladeManager.setLeftConfig({
            templateUrl: 'app/scripts/pages/mobile/menu.view.html',
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