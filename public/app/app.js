'use strict';

(function() {

    var module = angular.module('app', ['ngRoute']);

    module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        // $locationProvider.html5Mode(true);

        $routeProvider
            .when('/alunos', {
                templateUrl: '/app/aluno/listagem/alunoListagem.html',
                controller: 'AlunoListagemController'
            })
            .otherwise({
                redirectTo: '/alunos'
            });
    }])

})();
