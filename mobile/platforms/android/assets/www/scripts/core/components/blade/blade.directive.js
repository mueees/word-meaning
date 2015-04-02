(function(){
    'use strict';
    angular.module('seed.core.components.blade').directive('seedBlade', function ($templateCache, $compile, $rootScope, $timeout) {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "app/scripts/core/components/blade/blade.directive.view.html",
            scope: {
                seedConfig: "="
            },
            link: function ($scope, element) {
                var currentTemplateUrl = null;

                $scope.overlayHandler = function () {
                    $scope.expanded = false;
                };

                $scope.$watch('seedConfig', function (seedConfig) {
                    var html,
                        scope;

                    if(seedConfig && seedConfig.templateUrl && currentTemplateUrl != seedConfig.templateUrl){
                        currentTemplateUrl = seedConfig.templateUrl;

                        element.find('div').html('');

                        html = $templateCache.get(seedConfig.templateUrl);
                        scope = $rootScope.$new();
                        _.extend(scope, seedConfig.data);
                        html = $compile(html)(scope);

                        element.find('div').append(html);
                    }

                    $scope.expanded = seedConfig.expanded;

                    if(seedConfig.position){
                        $scope.position = seedConfig.position;
                    }
                });

                $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){
                    $scope.expanded = false;
                });
            }
        };
    });
})();