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
                var currentWord = null;

                $scope.form = {};
                $scope.word = {};

                $scope.$watch('form.word', _.debounce(function () {
                    $scope.onGetDefinition();
                }, 200));

                $scope.rememberWord = function () {
                    $scope.word.status = 'remembered';
                    WordResource.rememberById($scope.word.id);
                };

                $scope.forgetWord = function () {
                    delete $scope.word.status;
                    WordResource.forgetById($scope.word.id);
                };

                $scope.clearWord = function(){
                    $scope.form = {};
                };

                $scope.onGetDefinition = function () {
                    if ($scope.form.word) {
                        if($scope.form.word != currentWord){
                            currentWord = $scope.form.word;
                            WordResource.getWord($scope.form.word).then(function (word) {
                                $scope.word = word;
                            });
                        }
                    } else {
                        $scope.word = {};
                        $scope.$digest();
                    }
                };
            }
        };
    });
})();