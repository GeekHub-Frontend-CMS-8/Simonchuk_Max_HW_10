// $(document).ready( function (){
//     $('.menu-toggle').click(function () {
//         $('.main-menu__nav').toggleClass('active');
//     })
// });
(function($){
    $(function() {
        $('.main-menu__nav').on('click', function() {
            $(this).closest('.menu-toggle').toggleClass('active');
        });
    });
})(jQuery);