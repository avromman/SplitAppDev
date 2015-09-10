(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('clear', clear);

    /* @ngInject */
    function clear() {
        return {
            restrict: 'E',
            template: '<span class="clearfix"></span>'
        };
    }
})();
