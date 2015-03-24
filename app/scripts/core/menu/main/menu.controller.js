(function () {
    'use strict';

    angular.module('seed.core.menu.main').controller('MenuBladeController', function ($scope) {
        $scope.seedMenuConfiguration = {
            items: $scope.items
        };
    });

})();