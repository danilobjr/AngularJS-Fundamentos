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

    module.factory('notificador', ['toastr', function (toastr) {
        return {
            sucesso: function (mensagem) {
                console.log(mensagem);
                return toastr.success(mensagem);
            }
        }
    }]);
})();
