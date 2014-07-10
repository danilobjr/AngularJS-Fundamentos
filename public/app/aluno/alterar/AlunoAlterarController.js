'use strict';

(function() {

    angular.module('app').controller('AlunoAlterarController', ['$scope', '$routeParams', function ($scope, $routeParams) {

        // aluno em alteração

        $scope.aluno = {
            matricula: $routeParams.numeroMatriculaAluno,
            nome: 'Aquiteclínio Silvonato Júnior',
            idade: 19,
            estahMatriculado: false
        };

    }]);

})();
