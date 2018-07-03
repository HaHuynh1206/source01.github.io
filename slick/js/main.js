$(document).ready(function(){

/*banner*/
	$('.slider-banner').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoPlay:true,
		slidesToShow: 1,
	});

/*product top*/
	$('.slider-product-top').slick({
	  centerPadding: '60px',
	  slidesToShow: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

/*product*/
	$('.slider-product').slick({
			centerPadding: '60px',
		  	slidesToShow: 4,
		  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 490,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 330,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	/*new arrvials*/
	$('.slider-new-arrivals').slick({
			centerPadding: '60px',
		  	slidesToShow: 3,
		  	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 490,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 330,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	$('.slider-banner-bottom').slick({
		  	slidesToShow: 5,
		  	responsive: [
		    {
		      breakpoint: 778,
		      settings: {
		        arrows: false,
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 490,
		      settings: {
		        arrows: false,
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 330,
		      settings: {
		        arrows: false,
		        centerPadding: '40px',
		        slidesToShow: 1
		      }
		    }
		  ]
	});

	$('.top-search span.icon-top-search i.fa.fa-search').click(function(){
		$('.form-search').toggle();
	});

	$('.icon-top-search i.fa.fa-shopping-bag').hover(function(){
		if($('.div-bag').hasClass('show-div-bag')){
			$('.div-bag').removeClass('show-div-bag');
		}
		else{
			$('.div-bag').addClass('show-div-bag');
		}
	});

	$('.icon-top-search i.fa.fa-shopping-bag').click(function() {
		if($('.div-bag').hasClass('show-div-bag')){
			$('.div-bag').removeClass('show-div-bag');
		}
		else{
			$('.div-bag').addClass('show-div-bag');
		}
	});


	$('.icon-nav-mobile i.fa').click(function() {
		if($('.sidebar-nav-left').hasClass('show-nav-left')){
			$('.sidebar-nav-left').removeClass('show-nav-left');
		}else{
			$('.sidebar-nav-left').addClass('show-nav-left');
		}
	});

	$('h1.logo span i.fa').click(function() {
		if($('.sidebar-nav-left').hasClass('show-nav-left')){
			$('.sidebar-nav-left').removeClass('show-nav-left');
		}else{
			$('.sidebar-nav-left').addClass('show-nav-left');
		}
	});


	/*$('.drop-menu').click(function(){
        var sub = $(this).data('sub');
        $('.nav-mobile ul.sub-'+sub).toggle('slow');

        var icon = $(this).data('icon');
        if ($(this).hasClass('click-active')) {
            $(this).removeClass('click-active');
        } else {
            $(this).addClass('click-active');
        }
      });
*/


	$('.drop-menu').click(function(){
		var sub = $(this).data('sub');
		 $('.sidebar-nav-left ul.sub-'+sub).toggle('slow');

		var icon = $(this).data('icon');
        if ($(this).hasClass('click-active')) {
            $(this).removeClass('click-active');
        } else {
            $(this).addClass('click-active');
        }
	});
});
