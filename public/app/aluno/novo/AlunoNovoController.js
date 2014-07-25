'use strict';

(function() {

    angular.module('app').controller('AlunoNovoController', ['$scope', '$http', 'notificador', function ($scope, $http, notificador) {
        $scope.salvarNovoAluno = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.formNovoAluno.$valid) {
                $http.post('/api/alunos', $scope.novoAluno)
                .success(function (alunoCriado) {
                    notificador.sucesso('Aluno cadastrado');
                    console.log(alunoCriado);
                })
                .error(function (response) {
                    notificador.erro(response.errorMessage, response);
                });
            }
        };
    }]);

})();
