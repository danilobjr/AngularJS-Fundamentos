'use strict';

(function() {

    angular.module('app').controller('MatriculaRealizarController', ['$scope', '$routeParams', '$location', '$timeout', 'matriculaRealizarService', 'notificador', '_', function ($scope, $routeParams, $location, $timeout, matriculaRealizarService, notificador, _) {

        // model

        matriculaRealizarService.obterAluno($routeParams.matricula).then(
            function sucessoCallback(aluno) {
                $scope.aluno = aluno;
            },
            function erroCallback(response) {
                notificador.erro('Aluno não encontrado. Redirecionando para listagem em 5 segundos.', response);

                $timeout(function () {
                    $location.url('/alunos');
                }, 5000);
            });

        // defaults

        $scope.ordenarCadeirasPor = 'descricao';

        // métodos

        $scope.ordenarTabelaPor = function (propriedade) {
            if ($scope.ordenarCadeirasPor === propriedade) {
                $scope.reverterOrdenacao = !$scope.reverterOrdenacao;
            } else {
                $scope.reverterOrdenacao = false;
            }

            $scope.ordenarCadeirasPor = propriedade;
        };

        $scope.incluirCadeira = function (cadeira) {
            var resultadoInclusaoCadeira = matriculaRealizarService.incluirCadeira(cadeira);

            if (!resultadoInclusaoCadeira.foiIncluida)  {
                notificador.aviso(resultadoInclusaoCadeira.mensagem);
            }
        };

        $scope.excluirCadeira = function (cadeira) {
            matriculaRealizarService.excluirCadeira(cadeira);
        };

        $scope.finalizarMatricula = function () {
            var resultadoValidacao = matriculaRealizarService.validarFinalizacaoDaMatricula();

            if (resultadoValidacao.ehValido) {
                matriculaRealizarService.finalizarMatricula().then(
                    function sucessoCallback(aluno) {
                        notificador.sucesso('Aluno matriculado com sucesso');
                    },
                    function erroCallback(response) {
                        notificador.erro('Não foi possível realizar matrícula.', response);
                    });
            } else {
                notificador.aviso(resultadoValidacao.mensagem);
            }
        };
    }]);

})();
