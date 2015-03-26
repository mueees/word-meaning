(function(){
    'use strict';

    angular.module('seed.core.cache').config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('seed');
    });

})();