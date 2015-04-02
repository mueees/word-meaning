(function () {
    'use strict';
    angular.module('seed.core.components.cards').directive('seedSwipeCard', function ($swipe) {

        function SwipeableCardView(opts) {
            this.initialize(opts);
        }

        SwipeableCardView.prototype = {

            initialize: function (opts) {
                _.bindAll(this, '_doDragStart', '_doDrag', '_doDragEnd');

                this.el = opts.el;

                this.minDistance = opts.minDistance || angular.element(document.body).width()/3;
                this.maxDistance = opts.maxDistance;

                if (this.maxDistance && this.maxDistance < this.minDistance) {
                    this.maxDistance = this.minDistance * 1.2;
                }

                this.onDrag = opts.onDrag || angular.noop;

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

                angular.element(this.el).on('mousedown touchstart', self._doDragStart);
                angular.element(document).on('mousemove touchmove', self._doDrag);
                angular.element(document).on('mouseup touchend', self._doDragEnd);
            },

            _doDragStart: function (e) {
                e.seedPrevent = true;
                var evt = this._clearEvent(e);
                this.startX = evt.x;
            },

            _doDrag: function (e) {
                var evt = this._clearEvent(e);

                if (this.startX && Math.abs(this.startX) > 10) {
                    this.x = evt.x - this.startX;
                    this.y = 0;

                    if (this.maxDistance) {
                        if (Math.abs(this.x) < this.maxDistance) {
                            this._setTransform(this.x, this.y);
                        }
                    } else {
                        this._setTransform(this.x, this.y);
                    }

                    this.el.style['opacity'] = this._getOpacity();
                }
            },

            _doDragEnd: function (e) {
                e.stopPropagation();
                if (this.startX) {
                    if (Math.abs(this.x) > this.minDistance) {
                        this.onDrag();
                    } else {
                        this._setTransform(0, 0);
                        this.el.style['opacity'] = 1;
                    }

                    delete this.startX;
                    this.x = this.y = 0;
                }
            },

            _getOpacity: function () {
                var result = 1;
                var x = Math.abs(this.x);

                if (x > this.minDistance) {
                    return 0.2;
                } else {
                    result = (this.minDistance - x) / this.minDistance;
                    if (result < 0.2) result = 0.2
                }

                return result;
            },

            _setTransform: function (x, y) {
                this.el.style['transform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0) ';
                this.el.style['-webkit-transform'] = 'translate3d(' + x + 'px, ' + y + 'px, 0) ';
            }
        };

        return {
            restrict: "E",
            replace: false,
            template: '<div ng-transclude ></div>',
            transclude: true,
            scope: {
                onCardSwipe: '&'
            },
            link: function ($scope, $element) {
                var el = $element[0];

                new SwipeableCardView({
                    el: el,
                    onDrag: $scope.onCardSwipe
                });
            }
        };
    });
})();