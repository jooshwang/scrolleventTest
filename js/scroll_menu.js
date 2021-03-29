$(function(){
    scroll();
});


function scroll(){
    var $menu = $('#top_menu ul li'),
        $contents = $('#contents > div');

    $(window).scroll(function(){
        $contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var idx = $(this).index();
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
        });
    });
}
