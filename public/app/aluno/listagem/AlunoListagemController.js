'use strict';

(function() {

    angular.module('app').controller('AlunoListagemController', ['$scope', function ($scope) {

        // model

        $scope.alunos = [
            { numeroMatricula: 1930970747, nome: 'Aquiteclínio Silvonato Júnior', idade: 19, matriculado: false },
            { numeroMatricula: 9918746547, nome: 'Clidervânia Sucupira Miriápoles', idade: 18, matriculado: true },
            { numeroMatricula: 7917476188, nome: 'Biritrudes Abelarda Sombreira', idade: 25, matriculado: true }
        ];

        // defaults

        $scope.filtrarAlunosPor = '';
        $scope.filtroAlunosLabel = 'Todos';
        $scope.ordenarAlunosPor = 'nome';
        // $scope.reverterOrdenacao = false;

        // métodos

        $scope.filtrarTabelaPor = function (filtro, label) {
            $scope.filtrarAlunosPor = filtro;
            $scope.filtroAlunosLabel = label;
        };

        $scope.ordenarTabelaPor = function (propriedade) {
            $scope.ordenarAlunosPor = propriedade;

            if ($scope.ordenarAlunosPor === propriedade) {
                $scope.reverterOrdenacao = !$scope.reverterOrdenacao;
            }
        };

    }]);

})();
