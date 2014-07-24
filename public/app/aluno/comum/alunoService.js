'use strict';

(function() {

    angular.module('app').factory('alunoService', ['$http', function ($http) {

        var obterTodos = function methodName() {
            return $http.get('/api/alunos');
        };

        var excluir = function (id) {
            return $http.delete('/api/alunos/' + id);
        };

        return {
            obterTodos: obterTodos,
            excluir: excluir
        };
    }]);

})();
