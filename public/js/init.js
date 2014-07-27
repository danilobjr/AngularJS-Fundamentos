'use strict';

(function() {

    var _dom = $(document);

    _dom.on('mouseenter', '[data-toggle=tooltip]', function (e) {
        $(e.currentTarget).tooltip('show');
    });

    _dom.on('focus', 'input[type=text]', function (e) {
        $(e.currentTarget).setMask();
    });

    _dom.on('click', '.cancelar', function () {
        window.history.back();
    });

})();
