'use strict';

(function() {

    angular.module('app').controller('AlunoAlterarController', ['$scope', '$routeParams', '$location', '$log', 'alunoAlterarService', 'alunoService', 'notificador', function ($scope, $routeParams, $location, $log, alunoAlterarService, alunoService, notificador) {

        alunoService.obter($routeParams.matricula)
            .success(function (alunoObtido) {
                $scope.aluno = alunoObtido;
            })
            .error(function (response) {
                notificador.erro('Ocorreu um erro', response);
            });

        $scope.alterarAluno = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.formAluno.$valid) {
                alunoAlterarService.alterarAluno($scope.aluno).then(
                    function sucessoCallback (alunoAlterado) {
                        $log.log('Aluno alterado');
                        $log.log(alunoAlterado);
                        $location.url('/aluno/detalhe/' + alunoAlterado.matricula);
                    },
                    function erroCallback(response) {
                        notificador.erro('Ocorreu um erro', response);
                    });
            }
        };
    }]);

})();
