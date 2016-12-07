jQuery(function($){

    var $root = $('html, body');
    var offset = 220;
    var duration = 500;
    var $window = $(window);

    $(document).ready(function(){

        $('div[data-type="background"]').each(function(){
            var $bgobj = $(this);
            $window.scroll(function() {
                var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
                var coords = '50% '+ yPos + 'px';
                $bgobj.css({ backgroundPosition: coords });
            });
        });        

        $('a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });

        
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        });

        $('.back-to-top').click(function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    });

});