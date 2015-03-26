(function () {
    'use strict';
    angular.module('seed.core.components.explore').directive('seedExplore', function (WordResource) {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "app/scripts/core/components/explore/explore.directive.view.html",
            scope: {
                definition: "="
            },
            link: function ($scope) {
                $scope.form = {};
                $scope.word = {};

                /*$scope.$watch('form.word', function () {
                    $scope.onGetDefinition();
                });*/

                $scope.$watch('form.word', _.debounce(function () {
                    $scope.onGetDefinition();
                }, 200));

                $scope.onGetDefinition = function () {
                    if ($scope.form.word) {
                        WordResource.getWord($scope.form.word).then(function (word) {
                            $scope.word = word;
                        });
                    } else {
                        $scope.word = {};
                        $scope.$digest();
                    }
                };
            }
        };
    });
})();