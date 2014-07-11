'use strict';

(function() {
    angular.module('app').filter('filtrarAlunosPorStatusDeCadeira', ['_', function (_) {
        return function (alunos, status) {
            var alunosMatriculados = [];

            alunos.forEach(function (aluno) {
                var estahMatriculado = _.any(aluno.grade.cadeiras, { status: status });

                if (estahMatriculado) {
                    alunosMatriculados.push(aluno);
                }
            });

            return alunosMatriculados;
        };
    }]);
})();
