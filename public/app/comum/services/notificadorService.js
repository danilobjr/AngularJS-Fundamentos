'use strict';

(function() {
    var module = angular.module('app');

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    module.value('toastr', toastr);

    module.factory('notificador', ['$log', 'toastr', function ($log, toastr) {
        return {
            sucesso: function (mensagem) {
                $log.log('Sucesso: ' + mensagem);
                toastr.success(mensagem);
            },
            aviso: function (mensagem) {
                $log.log('Aviso: ' + mensagem);
                toastr.warning(mensagem);
            },
            erro: function (mensagem, erro) {
                $log.error(erro);
                toastr.error(mensagem);
            }
        }
    }]);
})();
