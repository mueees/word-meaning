(function () {
    'use strict';

    angular.module('seed.mobile.explore').controller('ExploreController', function ($scope, seedBladeManager) {
        $scope.switchLeftBlade = function () {
            seedBladeManager.expandLeftBlade();
        };
    });
})();