'use strict';

(function() {

    var module = angular.module('app', ['ngRoute']);

    module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .otherwise({
                redirectTo: '/'
            });
    }])

})();
