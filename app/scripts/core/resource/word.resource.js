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

                var deferredAbort = $q.defer();

                var wordFromCache = Cache.getWord(word);

                if (wordFromCache) {
                    Cache.toRecent(wordFromCache.id);
                    deferred.resolve(wordFromCache);
                } else {
                    WordModel.one().withHttpConfig({timeout: deferredAbort.promise}).get({word: word}).then(function (wordModel) {
                        var plainWord = wordModel.plain();

                        plainWord.word = word;
                        plainWord.id = seedGUID.generate();

                        if(plainWord.definitions && plainWord.definitions.length){
                            Cache.toRecent(plainWord.id);
                            Cache.toCache(plainWord);
                        }

                        deferred.resolve(plainWord);
                    });
                }

                promise.abort = function () {
                    deferredAbort.resolve();
                };

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
            },

            getRecentWords: function () {
                return Cache.getRecentWords();
            }
        };
    });
})();

