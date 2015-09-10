(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .directive('widgetAddBill', widgetAddBill);

    /* @ngInject */
    function widgetAddBill() {
        var directive = {
            replace: true,
            templateUrl: 'app/widgets/widget-add-bill.html',
            restrict: 'E',
            link: function($scope,$element,$attrs) {
                $scope.save = function () {
                    if ($scope.addBillForm.$valid) {
                        $scope.vm.addBill($scope.newbill);
                        $scope.reset();
                    }
                };
                $scope.reset = function() {
                    $scope.newbill = {title: '', amount: ''};
                };
            }
        };
        return directive;
    }
})();
