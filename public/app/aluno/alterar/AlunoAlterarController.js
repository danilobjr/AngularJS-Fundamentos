'use strict';

(function() {

    angular.module('app').controller('AlunoAlterarController', ['$scope', '$routeParams', '$location', 'alunoAlterarService', 'alunoService', 'notificador', function ($scope, $routeParams, $location, alunoAlterarService, alunoService, notificador) {

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
                alunoAlterarService.alterar($scope.aluno).then(
                    function sucessoCallback (alunoAlterado) {
                        console.log('Aluno alterado');
                        console.log(alunoAlterado);
                        $location.url('/aluno/detalhe/' + alunoAlterado.matricula);
                    },
                    function erroCallback(response) {
                        notificador.erro('Ocorreu um erro. Contate o suporte.', response);
                    });
            }
        };
    }]);

})();
