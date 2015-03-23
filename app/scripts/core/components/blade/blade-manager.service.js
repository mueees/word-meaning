(function(){
    'use strict';
    angular.module('seed.core.components.blade').factory('seedBladeManager', function ($rootScope, $timeout) {

        $rootScope._leftBladeConfig = {
            expanded: false
        };

        $rootScope._rightBladeConfig = {
            expanded: false
        };

        $timeout(function () {
            $rootScope._leftBladeConfig = b;
            expandLeftBlade();
        }, 500);

        function expandLeftBlade(){
            if(!$rootScope._leftBladeConfig.expanded){
                var config = angular.copy($rootScope._leftBladeConfig);
                config.expanded = true;
                $rootScope._leftBladeConfig = config;
            }
        }

        function collapseLeftBlade(){
            if($rootScope._leftBladeConfig.expanded){
                var config = angular.copy($rootScope._leftBladeConfig);
                config.expanded = false;
                $rootScope._leftBladeConfig = config;
            }
        }

        return {
            setRightConfig: function (config) {
                if(config != $rootScope._rightBladeConfig){
                    $rootScope._rightBladeConfig = config;
                }
            },

            setLeftConfig: function (config) {
                if(config != $rootScope._leftBladeConfig){
                    $rootScope._leftBladeConfig = config;
                }
            },

            expandLeftBlade: expandLeftBlade,

            collapseLeftBlade: collapseLeftBlade
        };
    });
})();