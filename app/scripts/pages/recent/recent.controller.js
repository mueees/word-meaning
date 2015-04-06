(function () {
    'use strict';

    angular.module('seed.mobile.recent').controller('RecentController', function ($scope, WordResource) {
        $scope.recentWords = WordResource.getRecentWords();
    });
})();