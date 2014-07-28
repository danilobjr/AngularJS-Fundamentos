'use strict';

(function() {

    angular.module('app').controller('AlunoDetalheController', ['$scope', '$routeParams', '$log', 'alunoService', 'notificador', '_', function ($scope, $routeParams, $log, alunoService, notificador, _) {

        alunoService.obter($routeParams.matricula)
            .success(function (aluno) {
                $scope.aluno = aluno;
            });

        $scope.concluirCadeira = function (cadeira) {
            var cadeiras = $scope.aluno.grade.cadeiras;
            var index = cadeiras.indexOf(cadeira);
            cadeiras[index].status = 'concluida';

            if (!_.any(cadeiras, { status: 'cursando' })) {
                $scope.aluno.estahMatriculado = false;
            }

            alunoService.alterar($scope.aluno)
                .success(function (alunoAlterado) {
                    $log.log(alunoAlterado);
                })
                .error(function (response) {
                    notificador.erro('Ocorreu um erro. Contate o suporte.', response);
                });
        };

    }]);

})();
