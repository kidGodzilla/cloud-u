"use strict";

(function () {

    CloudU.HTMLIncludes();

    $(document).ready(function () {

        var elements = document.querySelectorAll('.editable'),
            editor = new MediumEditor(elements, {
                buttons: ['bold', 'italic', 'underline', 'a', 'header1', 'header2', 'orderedlist', 'unorderedlist', 'quote', 'justifyLeft', 'justifyCenter', 'justifyRight']
            });

        $(function () {
            $('.editable').mediumInsert({
                editor: editor
            });
        });
    });
})();