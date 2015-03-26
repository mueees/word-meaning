(function () {
    'use strict';

    angular.module('seed.mobile.card').controller('CardController', function ($scope, WordResource) {
        $scope.words = WordResource.getRememberedWords();
    });
})();