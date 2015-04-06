(function () {
    'use strict';

    angular.module('seed.core.components.blade').factory('seedBladeManager', function ($rootScope, $swipe) {


        function SwipeableBlade(opts) {
            this.initialize(opts);
        }

        SwipeableBlade.prototype = {
            initialize: function (opts) {

                _.bindAll(this, '_doDragStart', '_doDrag', '_doDragEnd');

                this.minStartXDistance = opts.minStartXDistance || 50;
                this.minDistance = opts.minDistance || 50;
                this.onOpedBlade = opts.onOpedBlade || angular.noop;
                this.onCloseBlade = opts.onCloseBlade || angular.noop;

                //threshold that determinate this X or Y swipe
                this.thresholdX = 20;
                this.thresholdY = 120;

                //determinate X or Y direction
                this.direction = null;

                this.x = this.y = 0;

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
                if (!e.seedPrevent) {
                    var evt = this._clearEvent(e);

                    this.isRun = true;
                    this.startX = evt.x;
                    this.startY = evt.y;

                    /*if (evt.x < this.minStartXDistance) {
                     this.isRun = true;
                     this.startX = evt.x;
                     this.startY = evt.y;
                     }*/
                }
            },

            _doDrag: function (e) {
                if (this.isRun) {
                    var evt = this._clearEvent(e);

                    this.x = evt.x - this.startX;
                    this.y = evt.x - this.startY;

                    if (!this.direction) {
                        if (Math.abs(this.x) > this.thresholdX) {
                            this.direction = 'x';
                        } else if (Math.abs(this.y) > this.thresholdY) {
                            this.direction = 'y';
                        }
                    }
                }
            },

            _doDragEnd: function () {
                if (this.isRun && this.direction == 'x' && Math.abs(this.x) > this.minDistance) {
                    if (this.startX < this.minStartXDistance) {
                        //open blade
                        this.onOpedBlade();
                    } else if (this.x < 0) {
                        //close blade
                        this.onCloseBlade();
                    }
                }

                this.startY = this.startX = this.x = this.y = 0;
                this.isRun = this.direction = false;
            }
        };

        new SwipeableBlade({
            onOpedBlade: function () {
                $rootScope.$apply(function () {
                    expandLeftBlade();
                });
            },
            onCloseBlade: function () {
                if($rootScope._leftBladeConfig.expanded){
                    $rootScope.$apply(function () {
                        collapseLeftBlade();
                    });
                }
            }
        });

        $rootScope._leftBladeConfig = {
            expanded: true,
            position: 'left'
        };

        $rootScope._rightBladeConfig = {
            expanded: false
        };

        function expandLeftBlade() {
            var config = angular.copy($rootScope._leftBladeConfig);
            config.expanded = true;
            $rootScope._leftBladeConfig = config;
        }

        function collapseLeftBlade() {
            var config = angular.copy($rootScope._leftBladeConfig);
            config.expanded = false;
            $rootScope._leftBladeConfig = config;
        }

        return {
            setRightConfig: function (config) {
                if (config != $rootScope._rightBladeConfig) {
                    $rootScope._rightBladeConfig = config;
                }
            },

            setLeftConfig: function (config) {
                if (config.templateUrl != $rootScope._leftBladeConfig) {
                    config.position = 'left';
                    $rootScope._leftBladeConfig = config;
                }
            },

            expandLeftBlade: expandLeftBlade,

            collapseLeftBlade: collapseLeftBlade
        };
    });
})();