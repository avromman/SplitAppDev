(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('widgetBill', widgetBill);

    /* @ngInject */
    function widgetBill() {
        var directive = {
            templateUrl: 'app/widgets/widget-bill.html',
            restrict: 'EA'
        };
        return directive;
    }
})();
