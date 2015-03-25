(function() {
    'use strict';

    angular.module('seed.core.resource').factory('wordResource', function (BaseResource) {
        var wordModel = BaseResource.one('');
        wordModel.get({word: 'irony'});
        return wordModel;
    });
})();

