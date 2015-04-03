"use strict";

(function () {
    $(document).ready(function () {

        CloudU.HTMLIncludes();

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