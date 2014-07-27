'use strict';

(function() {

    angular.module('app').controller('AlunoDetalheController', ['$scope', '$routeParams', 'alunoService', function ($scope, $routeParams, alunoService) {

        alunoService.obter($routeParams.matricula)
            .success(function (aluno) {
                $scope.aluno = aluno;
            });

    }]);

})();
