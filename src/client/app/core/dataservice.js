/* jshint -W117 */
(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger','localStorageService','$timeout'];
    /* @ngInject */
    function dataservice($http,
                          $q,
                          exception,
                          logger,
                          localStorage,
                          $timeout) {
        var mock = mockData;
        var users = {};
        var bills = {};
        function getUsers() {
            var def =  $q.defer();
            $timeout(function() {
                var usersJSON = localStorage.get('Users');
                if (!usersJSON || usersJSON.length === 0) {
                    users = mock.getMockUsers();
                    updateUsers(users);
                    def.resolve(users);
                } else {
                    def.resolve(JSON.parse(usersJSON));
                }
            },1000);
            return def.promise;
        }
        function getBills() {
            var def =  $q.defer();
            $timeout(function() {
                var billsJSON = localStorage.get('Bills');
                if (!billsJSON ||
                        billsJSON.length === 0) {
                    bills = mock.getMockBills();
                    updateBills(bills);
                    def.resolve(bills);
                } else {
                    def.resolve(JSON.parse(billsJSON));
                }
            },1000);
            return def.promise;
        }
        function updateBills(bills) {
            localStorage.set('Bills',JSON.stringify(bills));
        }
        function updateUsers(users) {
            localStorage.set('Users',JSON.stringify(users));
        }
        var service = {
            getUsers: getUsers,
            getBills: getBills,
            updateBills: updateBills,
            updateUsers: updateUsers,
            bills: bills,
            users: users
        };
        return service;
    }
})();
