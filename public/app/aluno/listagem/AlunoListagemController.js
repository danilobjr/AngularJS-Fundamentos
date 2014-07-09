'use strict';

(function() {

    angular.module('app').controller('AlunoListagemController', ['$scope', function ($scope) {

        // model

        $scope.alunos = [
            { numeroMatricula: 1930970747, nome: 'Aquiteclínio Silvonato Júnior', idade: 25, matriculado: false },
            { numeroMatricula: 7917476188, nome: 'Biritrudes Abelarda Sombreira', idade: 19, matriculado: true },
            { numeroMatricula: 9918746547, nome: 'Clidervânia Sucupira Miriápoles', idade: 18, matriculado: true }
        ];

        // defaults

        $scope.filtrarAlunosPor = '';
        $scope.filtroAlunosLabel = 'Todos';

        // métodos

        $scope.filtrarTabelaPor = function (filtro, label) {
            $scope.filtrarAlunosPor = filtro;
            $scope.filtroAlunosLabel = label;
        };

    }]);

})();
