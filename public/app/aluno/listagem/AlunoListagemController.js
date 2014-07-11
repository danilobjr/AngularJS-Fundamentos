'use strict';

(function() {

    angular.module('app').controller('AlunoListagemController', ['$scope', 'notificador', function ($scope, notificador) {

        // model

        $scope.alunos = [
            {
                matricula: 1930970747,
                nome: 'Aquiteclínio Silvonato Júnior',
                idade: 19,
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
            },
            {
                matricula: 9918746547,
                nome: 'Clidervânia Sucupira Miriápoles',
                idade: 18,
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
            },
            {
                matricula: 7917476188,
                nome: 'Biritrudes Abelarda Sombreira',
                idade: 25,
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
        ];

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
            var index = $scope.alunos.indexOf(aluno);
            $scope.alunos.splice(index, 1);
            notificador.sucesso('Aluno "' + aluno.nome + '" removido');
        };
    }]);

})();
