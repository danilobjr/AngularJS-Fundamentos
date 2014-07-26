'use strict';

(function() {

    angular.module('app').controller('MatriculaController', ['$scope', '$routeParams', 'notificador', '_', function ($scope, $routeParams, notificador, _) {

        // model

        $scope.aluno = {
            matricula: $routeParams.matricula,
            nome: 'Fake da Silva',
            idade: 20,
            estahMatriculado: false,
            grade: {
                periodo: '2014.2',
                cadeiras:[
                    { descricao: 'Arquitetura de Computadores', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Lógica de Programação', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Matemática Discreta', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Inglês I', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Inglês II', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Engenharia de Software', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Estrutura de Dados', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Interação Humano Computador', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Programação OO', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Banco de Dados', creditos: 4, valor: 58.5, status: 'pendente' },
                    { descricao: 'Segurança da Informação', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Empreendedorismo', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Gestão de Equipes', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Economia e Finanças', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Contabilidade', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Laboratório de Hardware', creditos: 2, valor: 58.5, status: 'pendente' }
                ]
            }
        };

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
            var cadeiras = $scope.aluno.grade.cadeiras;

            var cadeirasIncluidas = _.where(cadeiras, { status: 'matriculado' });

            var quantidadeDeCadeirasIncluidasParaMatricula = cadeirasIncluidas.length;

            var creditos = _.pluck(cadeirasIncluidas, 'creditos');
            var quantidadeDeCreditosSomados = _.reduce(creditos, function (acumulador, valorAtualDaIteracao) {
                return acumulador + valorAtualDaIteracao;
            });

            var quantidadeDeCreditosVaiExceder = (quantidadeDeCreditosSomados + cadeira.creditos) > 20;

            if (quantidadeDeCadeirasIncluidasParaMatricula === 6)  {
                notificador.aviso('Não é possível incluir mais que 6 cadeiras');
            } else if (quantidadeDeCreditosVaiExceder) {
                notificador.aviso('Não é possível ter mais que 20 créditos neste período');
            } else {
                cadeira.status = "matriculado";
            }
        };

        $scope.excluirCadeira = function (cadeira) {
            cadeira.status = "pendente";
        };

        $scope.matricularAluno = function () {
            var cadeiras = $scope.aluno.grade.cadeiras;
            var haPeloMenosUmaCadeiraIncluida = _.any(cadeiras, { status: 'matriculado' });

            if (haPeloMenosUmaCadeiraIncluida) {
                notificador.sucesso('TODO: implementar');
            } else {
                notificador.aviso('É preciso incluir pelo menos 1 cadeira para realizar matrícula');
            }
        };
    }]);

})();
