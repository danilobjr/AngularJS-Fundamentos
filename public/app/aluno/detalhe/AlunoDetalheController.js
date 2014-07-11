'use strict';

(function() {

    angular.module('app').controller('AlunoDetalheController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.aluno = {
            matricula: $routeParams.numeroMatriculaAluno,
            nome: 'Antônio Morrendo das Dores',
            idade: 19,
            grade: {
                periodo: '2014.2',
                cadeiras:[
                    { descricao: 'Arquitetura de Computadores', creditos: 4, valor: 112.9, status: 'concluido' },
                    { descricao: 'Lógica de Programação', creditos: 4, valor: 112.9, status: 'concluido' },
                    { descricao: 'Matemática Discreta', creditos: 4, valor: 112.9, status: 'concluido' },
                    { descricao: 'Inglês I', creditos: 2, valor: 58.5, status: 'concluido' },
                    { descricao: 'Inglês II', creditos: 2, valor: 58.5, status: 'cursando' },
                    { descricao: 'Engenharia de Software', creditos: 4, valor: 112.9, status: 'cursando' },
                    { descricao: 'Estrutura de Dados', creditos: 4, valor: 112.9, status: 'cursando' },
                    { descricao: 'Interação Humano Computador', creditos: 2, valor: 58.5, status: 'cursando' },
                    { descricao: 'Programação OO', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Banco de Dados', creditos: 4, valor: 58.5, status: 'cursando' },
                    { descricao: 'Segurança da Informação', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Empreendedorismo', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Gestão de Equipes', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Economia e Finanças', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Contabilidade', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Laboratório de Hardware', creditos: 2, valor: 58.5, status: 'pendente' }
                ]
            }
        }

    }]);

})();
