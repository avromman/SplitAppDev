(function () {
    'use strict';

    angular
        .module('app.dashboard')
            .filter('createdBy', createdBy);
    function createdBy() {
        return function(input,search) {
            if (!input || !search) {
                return input;
            }
            var result = {};
            angular.forEach(input, function(value,key) {
                if (value.createdBy === search) {
                    result[key] = value;
                }
            });
            return result;
        };
    }
})();
