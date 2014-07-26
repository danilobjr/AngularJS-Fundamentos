var _ = require('lodash'),
    moment = require('moment');

var data = function () {

    var gradePadrao = {
        // periodo: '2014.2',
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
    };

    var gerarMatricula = function () {
        return moment().format('YYYYMMssSSS');
    };

    var gerarGradePadrao = function () {
        var grade = _.cloneDeep(gradePadrao);

        var dataHoje = moment();
        var anoAtual = dataHoje.format('YYYY');
        var semestre = (dataHoje.format('Q') < 3) ? '1' : '2';
        grade.periodo = anoAtual + '.' + semestre;

        return grade;
    };

    var alunos = [
        {
            id: _.uniqueId(),
            matricula: gerarMatricula(),
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
            id: _.uniqueId(),
            matricula: gerarMatricula(),
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
            id: _.uniqueId(),
            matricula: gerarMatricula(),
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

    var post = function (novoAluno, callback) {
        setTimeout(function () {
            var erro = undefined;
            if (!novoAluno) {
                erro = new Error('Objeto aluno é undefined');
                return callback(erro);
            } else if (!novoAluno.nome) {
                erro = new Error('Nome de aluno não pode ser nulo');
                return callback(erro);
            } else if (novoAluno.nome.length < 2) {
                erro = new Error('Nome de aluno precisa ter pelo menos 2 caracteres');
                return callback(erro);
            } else if (!novoAluno.dataNascimento) {
                erro = new Error('Data de nascimento de aluno não pode ser nulo');
                return callback(erro);
            } else if (!/(^(((0[1-9]|[12][0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/.test(novoAluno.dataNascimento)) {
                erro = new Error('Data de nascimento de aluno tem formato inválido');
                return callback(erro);
            } else if (!novoAluno.fone) {
                erro = new Error('Telefone de aluno não pode ser nulo');
                return callback(erro);
            } else if (!/(\(\d{2}\))\s(\d{4,5})\-(\d{4})\b/.test(novoAluno.fone)) {
                erro = new Error('Telefone de aluno tem formato inválido');
                return callback(erro);
            }
            // } else if (aluno.email.length && /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|”(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*”)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(aluno.email)) {
            //     var erro = new Error('Email de aluno tem formato inválido');
            //     return callback(erro);
            // }

            novoAluno.id = _.uniqueId();
            novoAluno.matricula = gerarMatricula();
            novoAluno.estahMatriculado = false;
            novoAluno.grade = gerarGradePadrao();

            console.log(novoAluno);

            alunos.push(novoAluno);

            callback(erro, novoAluno);
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
            post: post,
            remove: remove
        }
    };

}();

module.exports = data;
