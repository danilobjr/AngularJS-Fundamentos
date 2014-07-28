'use strict';

(function() {

    var AlunoListagemController = function ($scope, alunoListagemService, notificador, $log) {

        // model

        alunoListagemService.obterTodos().then(function (alunos) {
            $scope.alunos = alunos;
        });

        // defaults

        $scope.filtrarAlunosPor = '';
        $scope.filtroAlunosLabel = 'Todos';
        $scope.ordenarAlunosPor = 'nome';

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
            alunoListagemService.excluir(aluno).then(
                function successCallback(data) {
                    $log.log('Aluno removido: ' + aluno.nome);
                },
                function errorCallback(data) {
                    notificador.erro('Ocorreu um erro', data);
                });
        };
    };

    AlunoListagemController.$inject = ['$scope', 'alunoListagemService', 'notificador', '$log'];
    angular.module('app').controller('AlunoListagemController', AlunoListagemController);

})();
