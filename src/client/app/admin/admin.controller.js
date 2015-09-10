(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$q','logger',
                              'dataservice'];
    /* @ngInject */
    function AdminController($q,
                              logger,
                              dataservice) {
        var vm = this;
        vm.title = 'Admin';
        vm.users;

        activate();

        function activate() {
            var promises = [getUsers()];
            return $q.all(promises).then(function() {
                logger.info('Activated Admin View');
            });
        }
        function getUsers() {
            return dataservice.getUsers().then(function (data) {
                vm.users = data;
                return vm.users;
            });
        }
    }
})();
