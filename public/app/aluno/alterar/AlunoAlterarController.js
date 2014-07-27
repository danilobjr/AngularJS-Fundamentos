'use strict';

(function() {

    angular.module('app').controller('AlunoAlterarController', ['$scope', '$routeParams', '$location', 'alunoService', 'notificador', function ($scope, $routeParams, $location, alunoService, notificador) {

        alunoService.obter($routeParams.matricula)
            .success(function (alunoObtido) {
                $scope.aluno = alunoObtido;
            })
            .error(function (response) {
                notificador.erro('Ocorreu um erro. Contate suporte.', response);
            });

        $scope.alterarAluno = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.formAluno.$valid) {
                alunoService.alterar($scope.aluno)
                    .success(function (alunoAlterado) {
                        console.log('Aluno alterado');
                        console.log(alunoAlterado);
                        $location.url('/aluno/detalhe/' + alunoAlterado.matricula);
                    })
                    .error(function (response) {
                        notificador.erro('Ocorreu um erro. Contate o suporte.', response);
                    });
            }
        };
    }]);

})();
