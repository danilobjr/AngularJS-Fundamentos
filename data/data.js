var _ = require('lodash');

var data = function () {

    var alunos = [
        {
            id: '1',
            matricula: 1930970747,
            nome: 'Aquiteclínio Silvonato Júnior',
            dataNascimeno: '18/08/1994',
            email: 'antonio@email.com',
            fone: '(99) 8877-6655',
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
        },
        {
            id: '2',
            matricula: 9918746547,
            nome: 'Clidervânia Sucupira Miriápoles',
            dataNascimeno: '18/08/1994',
            email: 'antonio@email.com',
            fone: '(99) 8877-6655',
            estahMatriculado: true,
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
            id: '3',
            matricula: 7917476188,
            nome: 'Biritrudes Abelarda Sombreira',
            dataNascimeno: '18/08/1994',
            email: 'antonio@email.com',
            fone: '(99) 8877-6655',
            estahMatriculado: true,
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

    var getList = function (callback) {
        setTimeout(function () {
            var error = undefined;
            callback(error, alunos);
        }, 0);
    };

    var get = function (id, callback) {
        setTimeout(function () {
            var aluno = _.find(alunos, { id: id });
            var error = undefined;

            if (!aluno) {
                error = new Error('Aluno com id "' + id + '"" não encontrado');
            }

            callback(error, aluno);
        }, 0);
    };

    var remove = function (id, callback) {
        setTimeout(function () {
            var alunoRemovido = _.remove(alunos, { id: id });
            var error = undefined;

            if (!alunoRemovido) {
                error = new Error('Aluno com id "' + id + '"" não encontrado');
            }

            callback(error, alunoRemovido);
        }, 0);
    };

    return {
        alunos: {
            getList: getList,
            get: get,
            remove: remove
        }
    };

}();

module.exports = data;
