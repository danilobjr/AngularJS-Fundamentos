'use strict';

(function() {

    angular.module('app').filter('somarPorPropriedade', function () {
        return function (dados, propriedade) {
            if (!dados || !propriedade) {
                return 0;
            }

            var soma = 0;

            dados.forEach(function (item) {
                soma = soma + item[propriedade];
            });

            return soma;
        }
    });

})();
