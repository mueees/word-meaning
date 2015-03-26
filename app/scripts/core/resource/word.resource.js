(function () {
    'use strict';

    angular.module('seed.core.resource').factory('WordResource', function (seedGUID, BaseResource, Cache, $q) {
        var WordModel = BaseResource.service('define');

        BaseResource.extendModel('define', function (model) {
            model.test = function () {
            };

            return model;
        });

        return {
            getWord: function (word) {
                var deferred = $q.defer(),
                    promise = deferred.promise;

                var wordFromCache = Cache.getWord(word);

                if (wordFromCache) {
                    deferred.resolve(wordFromCache);
                } else {
                    WordModel.one().get({word: word}).then(function (wordModel) {
                        var plainWord = wordModel.plain();

                        plainWord.word = word;
                        plainWord.id = seedGUID.generate();

                        Cache.toCache(plainWord);

                        deferred.resolve(plainWord);
                    });
                }

                return promise;
            },

            rememberById: function (id) {
                Cache.rememberById(id);
            },

            forgetById: function (id) {
                Cache.forgetById(id);
            },

            getRememberedWords: function () {
                return Cache.getRememberedWords();
            }
        };
    });
})();

