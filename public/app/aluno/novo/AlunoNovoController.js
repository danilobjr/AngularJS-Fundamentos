'use strict';

(function() {

    angular.module('app').controller('AlunoNovoController', ['$scope', function ($scope) {
        $scope.salvarNovoAluno = function () {
            if ($scope.formNovoAluno.$valid) {
                alert('Válido!');
            } else {
                alert('Inválido :(');
            }
        };
    }]);

})();
