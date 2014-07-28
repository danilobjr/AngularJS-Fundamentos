'use strict';

(function() {

    angular.module('app').controller('AlunoNovoController', ['$scope', '$log', 'alunoService', '$location', function ($scope, $log, alunoService, $location) {

        $scope.salvarNovoAluno = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.formAluno.$valid) {
                alunoService.cadastrar($scope.novoAluno)
                    .success(function (alunoCadastrado) {
                        $log.log('Aluno cadastrado');
                        $log.log(alunoCadastrado);
                        $location.url('/aluno/detalhe/' + alunoCadastrado.matricula);
                    })
                    .error(function (response) {
                        notificador.erro('Ocorreu um erro. Contate o suporte.', response);
                    });
            }
        };

    }]);

})();
