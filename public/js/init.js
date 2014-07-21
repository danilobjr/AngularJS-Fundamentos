'use strict';

(function() {

    var _dom = $(document);

    _dom.on('mouseover', '[data-toggle=tooltip]', function () {
        $(e.currentTarget).tooltip('show');
    });

    // $(document).on('focus', 'input[type=text]', function (e) {
    //     $(e.currentTarget).setMask();
    // });

    _dom.on('click', '.cancelar', function () {
        window.history.back();
    });

})();
