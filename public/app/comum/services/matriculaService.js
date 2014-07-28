'use strict';

(function() {

    angular.module('app').factory('matriculaService', [function () {

        var alunoConcluiuCurso = function (aluno) {
            var quantidadeDeCadeirasConcluidas = _.where(aluno.grade.cadeiras, { status: 'concluida' }).length;
            var totalDeCadeiras = aluno.grade.cadeiras.length;

            return totalDeCadeiras === quantidadeDeCadeirasConcluidas;
        };

        return {
            alunoConcluiuCurso: alunoConcluiuCurso
        };
    }]);

})();
