(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope',
                                   '$q',
                                   'dataservice',
                                   'logger',
                                   'createdByFilter'];
    /* @ngInject */
    function DashboardController($scope,
                                  $q,
                                  dataservice,
                                  logger,
                                  createdByFilter) {
        /* init */
        var vm = this;
        vm.title = 'All expenses';
        vm.bills = dataservice.bills;
        vm.users = dataservice.users;
        vm.add = true;
        vm.selectedUser = 0;        //id of     selected user
        activate();

        function activate() {
            var promises = [getBills(), getUsers()];
            return $q.all(promises).then(function() {
                $scope.$watch('vm.search', function (newVal, oldVal) {
                    vm.filteredBills = createdByFilter(vm.bills,newVal);
                });
                logger.info('Activated Dashboard View');
            });
        }

        function getUsers() {
            return dataservice.getUsers().then(function (data) {
                vm.users = data;
                return vm.users;
            });
        }
        function getBills() {
            return dataservice.getBills().then(function (data) {
                vm.bills = data;
                return vm.bills;
            });
        }
        vm.addUser = function(u) {
            vm.users.push(angular.copy(u));
            dataservice.updateUsers(vm.users);
        };
        vm.addBill = function(b) {
            if ($scope.addBillForm.$valid) {
                var newBill = angular.copy(b);
                newBill.createdBy = vm.selectedUser;
                newBill.created = new Date();
                newBill.splitWith = [];
                angular.forEach(vm.users,function(value,key,obj) {
                    if (value.selected) {
                        newBill.splitWith.push(value.id);
                    }
                });
                vm.bills.push(newBill);
                dataservice.updateBills(vm.bills);
            }
        };
        vm.showUsers = function(t) {
            if (!t || t.length === 0) {
                return 'Nobody';
            }
            var str = '';
            if (t.length === vm.users.length) {
                return 'Everyone';
            }
            for (var i = 0; i < t.length; i++) {
                str += vm.getUserById(t[i]);
                if (i >= 0 && i < t.length - 1) {
                    str += ', ';
                }
            }
            if (str.length === 0) {
                return 'Nodody';
            } else {
                return str;
            }
        };
        vm.getUserById = function(id) {
            for (var i = 0; i < vm.users.length; i++) {
                if (vm.users[i].id === id) {
                    return vm.users[i].firstName + ' ' + vm.users[i].lastName;
                }
            }
            return '';
        };
    }
})();
