var seed = seed || {};

// Required to insure Tests execute correctly since these macros are only replaced on the built code and not the source code
var _LINE_ = 'unknown';
var _FILE_ = 'unknown.js';
var _TIMESTAMP_ = new Date().getTime();

(function () {
    'use strict';

    // Copy the angular over to the seed.util
    seed.util = {};
    angular.extend(seed.util, angular);

    // Expand the existing design and all any new methods we may require.

    /**
     * Determines if a reference is Null
     * @param value
     * @returns {boolean}
     */
    seed.util.isNull = function (value) {
        return value === null;
    };

    /**
     * Determines if a reference is defined and not null
     * @param {*} value Reference to check.
     * @returns {boolean} True if `value` is defined and not null.
     */
    seed.util.isDefinedAndNotNull = function (value) {
        return (!seed.util.isNull(value) && seed.util.isDefined(value));
    };

    /**
     * Determines if a reference is null or undefined but does not return true for a boolean false value
     * @param {*} value Reference to check.
     * @returns {boolean} True if `value` is undefined or null.
     */
    seed.util.isUndefinedOrNull = function (value) {
        return seed.util.isNull(value) || seed.util.isUndefined(value);
    };

    /**
     * Determines if a reference is null or undefined but does not return true for a boolean false value
     * @param {*} value Reference to check.
     * @returns {boolean} True if `value` is undefined or null.
     */
    seed.util.isNullOrUndefined = seed.util.isUndefinedOrNull;

    /**
     * Determines if a reference is an `Array` or something that has length and is an object.
     *
     * @param {*} value Reference to check.
     * @returns {boolean} True if `value` is an `Array Like` .
     */
    seed.util.isArrayLike = function (value) {
        return (seed.util.isArray(value) || (seed.util.isObject(value) && seed.util.isNumber(value.length)));
    };

    /**
     * Uses the typeof JS code to return the type of the input value and will return 'null' for null and
     * 'undefined' for undefined values.
     * @param {*} value
     * @returns {string}
     */
    seed.util.typeOf = function (value) {
        if (seed.util.isNull(value)) {
            return 'null';
        } else if (seed.util.isUndefined(value)) {
            return 'undefined';
        }
        return typeof value;
    };

    /**
     * Returns true if the specified value is a boolean.
     * @param {?} value to test.
     * @return {boolean} Whether value is boolean.
     */
    seed.util.isBoolean = function (value) {
        return typeof value == 'boolean';
    };

    /**
     * Returns true if the specified value is a string and contains data
     * @param {!string} value
     * @returns {boolean}
     */
    seed.util.isStringWithLength = function (value) {
        return seed.util.isString(value) && value.length > 0;
    };

    /**
     * Returns true if the value is an Array that contains data
     * @param value
     * @returns {*|boolean}
     */
    seed.util.isArrayWithLength = function (value) {
        return seed.util.isArray(value) && value.length > 0;
    };

    /**
     * Returns true if the value is a valid angular scope
     * @param value
     * @returns {*|boolean}
     */
    seed.util.isScope = function (value) {
        return seed.util.isObject(value) && seed.util.isFunction(value.$on) && seed.util.isFunction(value.$watch);
    };

    /**
     * @param value milliseconds
     */
    seed.util.isLessMinute = function (value) {
        return (value/1000 < 60) ? true: false;
    };

    /**
     * @param value milliseconds
     */
    seed.util.isLessHours = function (value) {
        return (value/1000/60 < 60) ? true: false;
    };

    /**
     * @param value milliseconds
     */
    seed.util.isLessDay = function (value) {
        return (value/1000/60/24 < 24) ? true: false;
    };

    /**
     * @param value milliseconds
     */
    seed.util.getSeconds = function (value) {
        return Math.floor(value/1000);
    };

    /**
     * @param value milliseconds
     */
    seed.util.getMinutes = function (value) {
        return Math.floor(value/1000/60);
    };

    /**
     * @param value milliseconds
     */
    seed.util.getHours = function (value) {
        return Math.floor(value/1000/60/60);
    };

    /**
     * @param value milliseconds
     */
    seed.util.getDays = function (value) {
        return Math.floor(value/1000/60/60/24);
    };

    var urlRegEx;

    /**
     * Returns true if the specified string represents a URL type string. It does not validate the URL itself.
     * @param {!string} url
     * @returns {boolean}
     */
    seed.util.isUrlString = function (url) {
        if (!seed.util.isStringWithLength(url)) {
            return false;
        }

        // Lazy initialize the regular expression
        if (seed.util.isUndefinedOrNull(urlRegEx)) {
            urlRegEx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
        }

        return urlRegEx.test(url);
    };

    /**
     * Wraps the wrapFn function by first calling it and then calling the withFn on the specified context and returning the results of the withFn function
     * @param {!Function} wrapFn
     * @param {!Function} withFn
     * @param {?*=} optContext
     * @returns {Function}
     */
    seed.util.wrapFunction = function(wrapFn, withFn, optContext) {
        seed.assert.assertFunction(wrapFn);
        seed.assert.assertFunction(withFn);
        return function() {
            //ar args = Array.prototype.slice.call(arguments, 0);
            wrapFn.apply(optContext, arguments);
            return withFn.apply(optContext, arguments);
        };
    };

    seed.util.extendConstructor = function (protoProps, staticProps) {
        var parent = this;
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call the parent's constructor.
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }

        // Add static properties to the constructor function, if supplied.
        _.extend(child, parent, staticProps);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);

        // Set a convenience property in case the parent's prototype is needed
        // later.
        child.__super__ = parent.prototype;

        return child;
    };

})();
