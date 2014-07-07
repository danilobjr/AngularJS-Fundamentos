'use strict';

(function() {

    angular.module('app').controller('AlunoListagemController', ['$scope', function ($scope) {

        // model

        $scope.alunos = [
            { nome: 'Aquiteclínio', idade: 25, matriculado: false },
            { nome: 'Biritrudes', idade: 19, matriculado: true },
            { nome: 'Clidervânia', idade: 18, matriculado: true }
        ];

        // defaults

        $scope.filtrarAlunosPor = '';
        $scope.filtroAlunosLabel = 'Todos';

        // métodos

        $scope.filtrarTabelaPor = function (filtro, label) {
            $scope.filtrarAlunosPor = filtro;
            $scope.filtroAlunosLabel = label;
        };

    }]);

})();
