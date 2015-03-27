(function () {
    'use strict';

    angular.module('seed.mobile').controller('MobileController', function ($scope, seedBladeManager, $timeout) {

        seedBladeManager.setLeftConfig({
            templateUrl: 'app/scripts/core/menu/main/menu.view.html',
            data: {
                items: [
                    {
                        sref: 'mobile.explore',
                        text: 'Explore',
                        icon: 'assets/svg/symbol/svg-sprite.svg#svg-icon-search100'
                    },
                    {
                        sref: 'mobile.list',
                        text: 'List',
                        icon: 'assets/svg/symbol/svg-sprite.svg#svg-icon-list89'
                    },
                    {
                        sref: 'mobile.card',
                        text: 'Card',
                        icon: 'assets/svg/symbol/svg-sprite.svg#svg-icon-google126'
                    },
                    {
                        sref: 'mobile.recent',
                        text: 'Recent',
                        icon: 'assets/svg/symbol/svg-sprite.svg#svg-icon-google132'
                    }
                ]
            }
        });

        $scope.switchLeftBlade = function () {
            seedBladeManager.expandLeftBlade();
        };

    });
})();