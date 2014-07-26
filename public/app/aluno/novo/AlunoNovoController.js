'use strict';

(function() {

    angular.module('app').controller('AlunoNovoController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.salvarNovoAluno = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.formNovoAluno.$valid) {
                $http.post('/api/alunos', $scope.novoAluno)
                .success(function (alunoCriado) {
                    console.log(alunoCriado);
                    $location.url('/aluno/detalhe/' + alunoCriado.matricula);
                })
                .error(function (response) {
                    notificador.erro(response.errorMessage, response);
                });
            }
        };
    }]);

})();
