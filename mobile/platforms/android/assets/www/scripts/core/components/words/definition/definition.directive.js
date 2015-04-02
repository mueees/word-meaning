(function(){
    'use strict';
    angular.module('seed.core.components.words').directive('seedWordDefinition', function () {
        return {
            restrict: "E",
            replace: false,
            templateUrl: "app/scripts/core/components/words/definition/definition.directive.view.html",
            scope: {
                definition: "="
            },
            link: function ($scope, element) {}
        };
    });
})();