'use strict';

(function() {

    angular.module('app').controller('AlunoNovoController', ['$scope', function ($scope) {
        $scope.salvarNovoAluno = function () {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.formNovoAluno.$valid) {
                console.log($scope.novoAluno);
            }
        };
    }]);

})();
