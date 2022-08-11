$('img').hover(
    function () {
        // hover over
        let newDoctor = $(this).attr('new-img-src');
        $(this).attr('src', newDoctor);
    },

    function () {
        // hover out
        let oldDoctor = $(this).attr('alt-src');
        $(this).attr('src', oldDoctor);
    }
);
