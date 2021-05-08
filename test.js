const pagetopBtn = document.querySelector('#page-top');
pagetopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 
// 

$(window).on('load scroll', function () {

    var box = $('.fadeIn');
    var animated = 'animated';

    box.each(function () {

        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if (scrollPos > boxOffset - wh + 100) {
            $(this).addClass(animated);
        }
    });

});