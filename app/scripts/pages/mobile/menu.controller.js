(function () {
    'use strict';

    angular.module('seed.mobile').controller('MenuBladeController', function ($scope) {
        $scope.seedMenuConfiguration = {
            items: $scope.items
        };
    });

})();