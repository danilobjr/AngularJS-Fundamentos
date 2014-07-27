'use strict';

(function() {

    angular.module('app').factory('alunoService', ['$http', function ($http) {

        var obterTodos = function () {
            return $http.get('/api/alunos');
        };

        var obter = function (matricula) {
            return $http.get('/api/alunos/' + matricula);
        };

        var cadastrar = function (novoAluno) {
            return $http.post('/api/alunos', novoAluno);
        };

        var alterar = function (aluno) {
            return $http.put('/api/alunos/' + aluno.matricula, aluno);
        };

        var excluir = function (matricula) {
            return $http.delete('/api/alunos/' + matricula);
        };

        return {
            obterTodos: obterTodos,
            obter: obter,
            cadastrar: cadastrar,
            alterar: alterar,
            excluir: excluir
        };
    }]);

})();
