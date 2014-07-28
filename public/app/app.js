'use strict';

(function() {

    var module = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap.showErrors']);

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
            .when('/aluno/detalhe/:matricula', {
                templateUrl: '/app/aluno/detalhe/alunoDetalhe.html',
                controller: 'AlunoDetalheController'
            })
            .when('/aluno/alterar/:matricula', {
                templateUrl: '/app/aluno/alterar/alunoAlterar.html',
                controller: 'AlunoAlterarController'
            })
            .when('/matricula/:matricula', {
                templateUrl: '/app/matricula/matricula.html',
                controller: 'MatriculaRealizarController'
            })
            .otherwise({
                redirectTo: '/alunos'
            });
    }])

})();
