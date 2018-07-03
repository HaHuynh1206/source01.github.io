$(document).ready(function(){

    $('.header-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
       infinite: true,
      /*fade: true,*/
       centerMode: true,
      asNavFor: '.slider-nav',
      centerPadding: '15%',
      autoPlay:true,
      autoplaySpeed: 1500,
    });

    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.header-slide',
      focusOnSelect: true,
       /* autoPlay:true*/
    });


    $('.main-list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay:true,
      centerMode: false,
      autoplaySpeed: 1500,
      centerPadding: false
    });

/*hover menu*/
    $('.content-top-menu ul li').mouseenter(function(){
            var sub = $(this).data('sub');
            $('.content-top-menu ul.sub-'+sub).css('display','block');
            $('.content-top-menu ul.sub-'+sub).addClass('fadeInUp');
        });

    $('.content-top-menu ul li').mouseleave(function(){
            var sub = $(this).data('sub');
            $('.content-top-menu ul.sub-'+sub).css('display','none');
             $('.content-top-menu ul.sub-'+sub).removeClass('fadeInUp');
    });

/*slidebar menu*/

    $('.drop-menu').click(function(){
        var sub = $(this).data('sub');
         $('.nav-sidebar ul.sub-'+sub).toggle('slow');

        var icon = $(this).data('icon');
            if ($(this).hasClass('click-active')) {
                $(this).removeClass('click-active');
            } else {
                $(this).addClass('click-active');
            }
      });

  /*count number*/
    $('#team').data('countToOptions', {
        formatter: function (value, options) {
          return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
      });
   $('.timer.num').each(count);
   function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      };

    $('.form-login p.click-show-login').click(function(){
        $('.main-login').toggle('slow');

    });

    /*show sidebar*/
    $('.icon-nav').click(function(){
           if($('#sidebar-mobile').hasClass('show-nav')){
                $('#sidebar-mobile').removeClass('show-nav');
            }
            else{
                $('#sidebar-mobile').addClass('show-nav');
            }
            $('#slide, #header').addClass('bg-show-nav');
            $('text-slide').addClass('text-bg-nav');
            $('body').addClass('bg-show-nav');
        });

    $(document).mouseup(function(e) {
        var container = $("#sidebar-mobile");
        var icon = $(".icon-nav");
        if (!icon.is(e.target) && icon.has(e.target).length === 0 && !container.is(e.target) && container.has(e.target).length === 0)
        {
            container.removeClass('show-nav');
            $('#slide, #header').removeClass('bg-show-nav');
            $('text-slide').removeClass('text-bg-nav');
            $('body').removeClass('bg-show-nav');
        }
        // var width = $(window).width();
        // if(width < 430){
        //     $('.icon-nav').click(function(){
        //         if($('#sidebar-mobile').hasClass('show-nav')){
        //         $('#sidebar-mobile').removeClass('show-nav');
        //     }
        //     else{
        //         $('#sidebar-mobile').addClass('show-nav');
        //     }
        //     })
        // }
    });
});
