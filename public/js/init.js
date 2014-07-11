'use strict';

(function() {

    $(document).on('mouseover', '[data-toggle=tooltip]', function (e) {
        $(e.currentTarget).tooltip('show');
    });

    // $(document).on('focus', 'input[type=text]', function (e) {
    //     $(e.currentTarget).setMask();
    // });

})();
