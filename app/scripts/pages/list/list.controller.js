(function () {
    'use strict';

    angular.module('seed.mobile.list').controller('ListController', function ($scope, WordResource) {
        $scope.words = WordResource.getRememberedWords();
    });
})();