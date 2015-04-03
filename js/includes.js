(function () {
    CloudU.registerGlobal('HTMLIncludes', function () {
        $(document).ready(function () {
            $('.html-include').each(function () {
                var sourceURL = $(this).attr('data-source-url');
                $(this).load(sourceURL);
            });
        });
    })
})();