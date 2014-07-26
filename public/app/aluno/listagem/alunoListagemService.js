'use strict';

(function() {

    angular.module('app').factory('alunoListagemService', ['alunoService', '$q', function (alunoService, $q) {

        var alunos = [];

        var obterTodos = function () {
            var deferred = $q.defer();

            alunoService.obterTodos().success(function (alunosObtidos) {
                alunos = alunosObtidos;
                deferred.resolve(alunos);
            });

            return deferred.promise;
        };

        var excluir = function (aluno) {
            var deferred = $q.defer();

            alunoService.excluir(aluno.matricula)
                .success(function (alunoRemovido) {
                    var index = alunos.indexOf(aluno);
                    alunos.splice(index, 1);
                    deferred.resolve('Aluno "' + aluno.nome + '" removido');
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        };

        return {
            alunos: alunos,
            obterTodos: obterTodos,
            excluir: excluir
        };
    }]);

})();
