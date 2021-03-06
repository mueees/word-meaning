(function () {
    'use strict';

    angular.module('seed.core.cache').factory('Cache', function (localStorageService) {
        function _initStorage() {
            if (!localStorageService.get('words')) {
                localStorageService.set('words', []);
            }

            if (!localStorageService.get('recent')) {
                localStorageService.set('recent', []);
            }

            if (!localStorageService.get('remembered')) {
                localStorageService.set('remembered', []);
            }
        }

        _initStorage();

        return {
            getWord: function (word) {
                var remembered,
                    wordFromCache;

                wordFromCache = _.find(localStorageService.get('words'), {
                    word: word
                });

                if (wordFromCache) {
                    remembered = localStorageService.get('remembered');
                    if (remembered.indexOf(wordFromCache.id) != -1) {
                        wordFromCache.status = 'remembered';
                    }
                }

                return wordFromCache;
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
            },

            rememberById: function (id) {
                var remembered = localStorageService.get('remembered');

                if (remembered.indexOf(id) == -1) {
                    remembered.push(id);
                    localStorageService.set('remembered', remembered);
                }
            },

            forgetById: function (id) {
                var remembered = localStorageService.get('remembered'),
                    index = remembered.indexOf(id);

                if (index != -1) {
                    remembered.splice(index, 1);
                    localStorageService.set('remembered', remembered);
                }
            },

            getRememberedWords: function () {
                var remembered = localStorageService.get('remembered'),
                    words = localStorageService.get('words'),
                    result = [];

                angular.forEach(remembered, function (id) {
                    var word = _.find(words, {
                        id: id
                    });
                    result.push(word);
                });

                return result;
            },

            toRecent: function (id) {
                var recent = localStorageService.get('recent');
                if (recent.length > 50) {
                    recent = recent.splice(0, 49);
                }
                recent.unshift(id);
                localStorageService.set('recent', recent);
            },

            getRecentWords: function () {
                var recent = localStorageService.get('recent'),
                    words = localStorageService.get('words'),
                    result = [];

                angular.forEach(recent, function (id) {
                    var word = _.find(words, {
                        id: id
                    });
                    result.push(word);
                });

                return result;
            }
        }
    });
})();