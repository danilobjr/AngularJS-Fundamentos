'use strict';

(function() {

    $(document).on('mouseover', '[data-toggle=tooltip]', function (e) {
        $(e.currentTarget).tooltip('show');
    })

})();
