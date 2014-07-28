'use strict';

(function() {

    angular.module('app').factory('alunoAlterarService', ['alunoService', '$q', function (alunoService, $q) {

        var alterarAluno = function (alunoAlterado) {
            var deferred = $q.defer();

            alunoService.obter(alunoAlterado.matricula)
                .success(function (aluno) {
                    aluno.nome = alunoAlterado.nome;
                    aluno.dataNascimento = alunoAlterado.dataNascimento;
                    aluno.email = alunoAlterado.email;
                    aluno.fone = alunoAlterado.fone;
                    aluno.estahMatriculado = alunoAlterado.estahMatriculado;

                    alunoService.alterar(aluno)
                        .success(function (alunoAlteradoComSucesso) {
                            deferred.resolve(alunoAlteradoComSucesso);
                        })
                        .error(function (response) {
                            deferred.reject(response);
                        });
                })
                .error(function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        };

        return {
            alterarAluno: alterarAluno
        };
    }]);

})();
