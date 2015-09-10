(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[splitapp Error] ',
        appTitle: 'Split'
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$logProvider',
                         'routerHelperProvider',
                         'exceptionHandlerProvider',
                         'localStorageServiceProvider'];
    /* @ngInject */
    function configure($logProvider,
                        routerHelperProvider,
                        exceptionHandlerProvider,
                        localStorageServiceProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});
        localStorageServiceProvider
    .setPrefix('splitapp');
    }

})();
