'use strict';

(function() {

    angular.module('app').factory('matriculaRealizarService', ['$q', 'alunoService', '_', function ($q, alunoService, _) {

        var aluno = {};

        var obterAluno = function (matricula) {
            var deferred = $q.defer();

            alunoService.obter(matricula)
                .success(function (alunoObtido) {
                    aluno = alunoObtido;
                    deferred.resolve(aluno);
                })
                .error(function (response) {
                    deferred.reject(response)
                });

            return deferred.promise;
        };

        var estahNaQuantidadeMaximaDeCadeirasIncluidas = function () {
            var cadeiras = aluno.grade.cadeiras;
            var cadeirasIncluidas = _.where(cadeiras, { status: 'cursando' });
            return cadeirasIncluidas.length === 6;
        };

        var quantidadeDeCreditosVaiExcederAoIncluirCadeira = function (cadeira) {
            var cadeiras = aluno.grade.cadeiras;
            var cadeirasIncluidas = _.where(cadeiras, { status: 'cursando' });

            var creditos = _.pluck(cadeirasIncluidas, 'creditos');
            var quantidadeDeCreditosSomados = _.reduce(creditos, function (acumulador, valorAtualDaIteracao) {
                return acumulador + valorAtualDaIteracao;
            });

            return (quantidadeDeCreditosSomados + cadeira.creditos) > 20;
        };

        var validarInclusaoDeCadeira = function (cadeira) {
            var resultadoValidacao = {
                ehValido: false,
                mensagem: ''
            };

            if (estahNaQuantidadeMaximaDeCadeirasIncluidas())  {
                resultadoValidacao.ehValido = false;
                resultadoValidacao.mensagem = 'Só é possível incluir até 6 cadeiras';
            } else if (quantidadeDeCreditosVaiExcederAoIncluirCadeira(cadeira)) {
                resultadoValidacao.ehValido = false;
                resultadoValidacao.mensagem = 'Se incluir esta cadeira, o limite de 20 créditos por período vai exceder';
            } else {
                resultadoValidacao.ehValido = true;
            }

            return resultadoValidacao;
        };

        var incluirCadeira = function (cadeira) {
            var resultadoInclusaoCadeira = {
                foiIncluida: false,
                mensagem: ''
            };

            var resultadoValidacao = validarInclusaoDeCadeira(cadeira);

            if (resultadoValidacao.ehValido)  {
                cadeira.status = 'cursando';
                resultadoInclusaoCadeira.foiIncluida = true;
            } else {
                resultadoInclusaoCadeira.mensagem = resultadoValidacao.mensagem;
            }

            return resultadoInclusaoCadeira;
        };

        var excluirCadeira = function (cadeira) {
            cadeira.status = 'pendente';
        };

        var validarFinalizacaoDaMatricula = function () {
            var resultado = {
                ehValido: false,
                mensagem: ''
            };

            var haPeloMenosUmaCadeiraIncluida = _.any(aluno.grade.cadeiras, { status: 'cursando' });

            if (aluno.estahMatriculado) {
                resultado.mensagem = 'Aluno já está matriculado';
            } else if (!haPeloMenosUmaCadeiraIncluida) {
                resultado.mensagem = 'Necessário incluir pelo menos 1 cadeira';
            } else {
                resultado.ehValido = true;
            }

            return resultado;
        };

        var finalizarMatricula = function () {
            var deferred = $q.defer();

            aluno.estahMatriculado = true;

            alunoService.alterar(aluno)
                .success(function (aluno) {
                    deferred.resolve(aluno);
                })
                .error(function (response) {
                    deferred.reject(response);
                });

            return deferred.promise;
        };

        return {
            obterAluno: obterAluno,
            incluirCadeira: incluirCadeira,
            excluirCadeira: excluirCadeira,
            validarFinalizacaoDaMatricula: validarFinalizacaoDaMatricula,
            finalizarMatricula: finalizarMatricula
        };
    }]);

})();
