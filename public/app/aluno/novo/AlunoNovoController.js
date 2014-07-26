'use strict';

(function() {

    angular.module('app').controller('AlunoNovoController', ['$scope', 'alunoService', '$location', function ($scope, alunoService, $location) {

        $scope.salvarNovoAluno = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.formNovoAluno.$valid) {
                alunoService.cadastrar($scope.novoAluno)
                    .success(function (alunoCadastrado) {
                        console.log('Aluno cadastrado');
                        console.log(alunoCadastrado);
                        $location.url('/aluno/detalhe/' + alunoCriado.matricula);
                    })
                    .error(function (response) {
                        notificador.erro('Ocorreu um erro. Contate o suporte.', response);
                    });
            }
        };

    }]);

})();
