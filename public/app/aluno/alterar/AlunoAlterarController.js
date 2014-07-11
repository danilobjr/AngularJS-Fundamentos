'use strict';

(function() {

    angular.module('app').controller('AlunoAlterarController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        // aluno em alteração

        $scope.aluno = {
            matricula: $routeParams.numeroMatriculaAluno,
            nome: 'Aquiteclínio Silvonato Júnior',
            dataNascimeno: '18/08/1994',
            email: 'antonio@email.com',
            fone: '(99) 8877-6655',
            estahMatriculado: false
        };

    }]);

})();
