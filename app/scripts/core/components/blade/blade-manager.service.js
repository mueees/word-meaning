(function(){
    'use strict';

    angular.module('seed.core.components.blade').factory('seedBladeManager', function ($rootScope) {

        $rootScope._leftBladeConfig = {
            expanded: true,
            position: 'left'
        };

        $rootScope._rightBladeConfig = {
            expanded: false
        };

        function expandLeftBlade(){
            var config = angular.copy($rootScope._leftBladeConfig);
            config.expanded = true;
            $rootScope._leftBladeConfig = config;
        }

        function collapseLeftBlade(){
            var config = angular.copy($rootScope._leftBladeConfig);
            config.expanded = false;
            $rootScope._leftBladeConfig = config;
        }

        return {
            setRightConfig: function (config) {
                if(config != $rootScope._rightBladeConfig){
                    $rootScope._rightBladeConfig = config;
                }
            },

            setLeftConfig: function (config) {
                if(config.templateUrl != $rootScope._leftBladeConfig){
                    config.position = 'left';
                    $rootScope._leftBladeConfig = config;
                }
            },

            expandLeftBlade: expandLeftBlade,

            collapseLeftBlade: collapseLeftBlade
        };
    });
})();