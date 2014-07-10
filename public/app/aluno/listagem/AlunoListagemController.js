'use strict';

(function() {

    angular.module('app').controller('AlunoListagemController', ['$scope', 'notificador', function ($scope, notificador) {

        // model

        $scope.alunos = [
            { matricula: 1930970747, nome: 'Aquiteclínio Silvonato Júnior', idade: 19, estahMatriculado: false },
            { matricula: 9918746547, nome: 'Clidervânia Sucupira Miriápoles', idade: 18, estahMatriculado: true },
            { matricula: 7917476188, nome: 'Biritrudes Abelarda Sombreira', idade: 25, estahMatriculado: true }
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
            if ($scope.ordenarAlunosPor === propriedade) {
                $scope.reverterOrdenacao = !$scope.reverterOrdenacao;
            } else {
                $scope.reverterOrdenacao = false;
            }

            $scope.ordenarAlunosPor = propriedade;
        };

        $scope.excluirAluno = function (aluno) {
            var index = $scope.alunos.indexOf(aluno);
            $scope.alunos.splice(index, 1);
            notificador.sucesso('Aluno "' + aluno.nome + '" removido');
        };
    }]);

})();
