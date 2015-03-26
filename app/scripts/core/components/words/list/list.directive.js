(function(){
    'use strict';
    angular.module('seed.core.components.words').directive('seedWordListItem', function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "app/scripts/core/components/words/list/list.directive.view.html",
            scope: {
                word: "="
            },
            link: function ($scope) {
                $scope.firstLetter = $scope.word.word[0];

                $scope.toggleDefinition = function () {
                    $scope.showDefinition = !$scope.showDefinition;
                }
            }
        };
    });
})();