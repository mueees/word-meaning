(function(){
    'use strict';

    angular.module('seed.core.components.blade').factory('seedBladeManager', function ($rootScope, $swipe) {


        function SwipeableBlade(opts){
            this.initialize(opts);
        }

        SwipeableBlade.prototype = {
            initialize: function (opts) {

                _.bindAll(this, '_doDragStart', '_doDrag', '_doDragEnd');

                this.minXDistance = opts.minXDistance || 30;
                this.onOpedBlade = opts.onOpedBlade || angular.noop;

                this._bindEvents();
            },

            _clearEvent: function (e) {
                var result = {
                    e: e
                };

                if (e instanceof MouseEvent) {
                    result.x = e.pageX;
                    result.y = e.pageY;
                    result.target = e.target;
                } else if (e instanceof TouchEvent) {
                    result.x = e.touches[0].clientX;
                    result.y = e.touches[0].clientY;
                    result.target = e.touches[0].target;
                }

                return result;
            },

            _bindEvents: function () {
                var self = this;

                angular.element(document).on('mousedown touchstart', self._doDragStart);
                angular.element(document).on('mousemove touchmove', self._doDrag);
                angular.element(document).on('mouseup touchend', self._doDragEnd);
            },

            _doDragStart: function (e) {
                if(!e.seedPrevent){
                    var evt = this._clearEvent(e);
                    this.startX = evt.x;
                }
            },

            _doDrag: function (e) {
                var evt = this._clearEvent(e);

                if(this.startX && this.startX < this.minXDistance){
                    this.x = evt.x - this.startX;
                }
            },

            _doDragEnd: function () {
                if(this.x){
                    this.onOpedBlade();
                    this.startX = 0;
                    this.x = 0;
                }
            }
        };

        new SwipeableBlade({
            onOpedBlade: function () {
                expandLeftBlade();
            }
        });

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
            $rootScope.$digest();
        }

        function collapseLeftBlade(){
            var config = angular.copy($rootScope._leftBladeConfig);
            config.expanded = false;
            $rootScope._leftBladeConfig = config;
            $rootScope.$digest();
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