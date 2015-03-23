(function(){
    'use strict';
    angular.module('seed.core.components.blade').directive('seedBlade', function ($templateCache, $compile, $rootScope) {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "app/scripts/core/components/blade/blade.directive.view.html",
            scope: {
                seedConfig: "="
            },
            link: function ($scope, element) {
                $scope.$watch('seedConfig', function (seedConfig) {
                    var html,
                        scope;

                    if(seedConfig && seedConfig.templateUrl){
                        element.find('div').html('');

                        html = $templateCache.get(seedConfig.templateUrl);
                        scope = $rootScope.$new();
                        _.extend(scope, seedConfig.data);
                        html = $compile(html)(scope);

                        element.find('div').append(html);
                    }

                    if(seedConfig.expanded != $scope.expanded){
                        $scope.expanded = seedConfig.expanded;
                    }
                });
            }
        };
    });
})();