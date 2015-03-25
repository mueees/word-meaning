(function() {
    'use strict';

    angular.module('seed.core.resource').factory('BaseResource', function (Restangular) {
        var baseUrl = 'https://montanaflynn-dictionary.p.mashape.com/define',
            mashapeKey = '3j1uMD3ZGgmsh1GLPlApvpbm8eD7p1KdLk3jsnYJoBUqjVTkiK';

        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.setDefaultRequestParams({'mashape-key': mashapeKey});
            RestangularConfigurer.setBaseUrl(baseUrl);
        });
    });
})();

