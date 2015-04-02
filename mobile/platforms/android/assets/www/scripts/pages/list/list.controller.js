(function () {
    'use strict';

    angular.module('seed.mobile.list').controller('ListController', function ($scope, WordResource) {
        $scope.words = WordResource.getRememberedWords();

        $scope.deleteWord = function (word, i) {
            WordResource.forgetById(word.id);
            $scope.words.splice(i, 1);
            $scope.$digest();
        };

    });
})();