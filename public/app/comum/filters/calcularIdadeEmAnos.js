'use strict';

(function() {

    angular.module('app').filter('calcularIdadeEmAnos', function () {
        return function (dataNascimento) {
            var data = dataNascimento.split('/');

            var dia = data[0],
                mes = data[1],
                ano = data[2];

            var momentoDoNascimento = moment(ano + '-' + mes + '-' + dia);
            var hoje = moment();

            return hoje.diff(momentoDoNascimento, 'years');
        };
    });

})();
