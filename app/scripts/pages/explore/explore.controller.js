(function () {
    'use strict';

    angular.module('seed.mobile.explore').controller('ExploreController', function ($scope, $swipe, seedBladeManager) {

        $swipe.bind(angular.element(document), {
            end: function (obj) {
                /*obj.x;
                obj.y;*/
            }
        });

    });
})();