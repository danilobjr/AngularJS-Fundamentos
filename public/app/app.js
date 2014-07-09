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
            .when('/aluno/novo', {
                templateUrl: '/app/aluno/novo/alunoNovo.html',
                controller: 'AlunoNovoController'
            })
            .otherwise({
                redirectTo: '/alunos'
            });
    }])

})();
