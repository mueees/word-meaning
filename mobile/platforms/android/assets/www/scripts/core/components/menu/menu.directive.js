(function(){
    'use strict';
    angular.module('seed.core.components.menu').directive('seedMenu', function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "app/scripts/core/components/menu/menu.directive.view.html",
            scope: {
                seedConfig: "="
            },
            link: function ($scope) {
                var config = $scope.seedConfig;
                $scope.items = config.items;

                $scope.selected = null;

                $scope.onClickHandler = function (item) {
                    $scope.selected = item;
                }
            }
        };
    });
})();