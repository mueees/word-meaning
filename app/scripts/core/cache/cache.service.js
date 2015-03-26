(function () {
    'use strict';

    angular.module('seed.core.cache').factory('Cache', function (localStorageService) {
        function _initStorage() {
            if (!localStorageService.get('words')) {
                localStorageService.set('words', []);
            }
        }

        _initStorage();

        return {
            getWord: function (word) {
                return _.find(localStorageService.get('words'), {
                    word: word
                });
            },

            toCache: function (word) {
                var me = this;

                if (word) {
                    if (seed.util.isArrayWithLength(word)) {
                        angular.forEach(word, function (w) {
                            me.toCache(w);
                        });
                    } else {
                        var words = localStorageService.get('words');
                        words.push(word);
                        localStorageService.set('words', words);
                    }
                }
            }
        }
    });
})();