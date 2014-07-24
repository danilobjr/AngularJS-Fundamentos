'use strict';

(function() {

    angular.module('app').controller('AlunoListagemController', ['$scope', '$http', 'notificador', function ($scope, $http, notificador) {

        // model

        $http.get('/api/alunos').success(function (data) {
            $scope.alunos = data;
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
            $http.delete('/api/alunos/' + aluno.id)
                .success(function (data, status, headers, config) {
                    debugger;
                    var index = $scope.alunos.indexOf(aluno);
                    $scope.alunos.splice(index, 1);
                    notificador.sucesso('Aluno "' + aluno.nome + '" removido');
                })
                .error(function (data, status, headers, config) {
                    notificador.erro('Ocorreu um erro', data);
                });
        };
    }]);

})();
