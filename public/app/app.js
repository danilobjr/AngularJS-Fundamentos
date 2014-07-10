'use strict';

(function() {

    var module = angular.module('app', ['ngRoute', 'ngAnimate']);

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
            .when('/aluno/alterar/:numeroMatriculaAluno', {
                templateUrl: '/app/aluno/alterar/alunoAlterar.html',
                controller: 'AlunoAlterarController'
            })
            .when('/matricula/:numeroMatriculaAluno', {
                templateUrl: '/app/matricula/matricula.html',
                controller: 'MatriculaController'
            })
            .otherwise({
                redirectTo: '/alunos'
            });
    }])

})();
