;(function($){
    "use strict"
	
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

	var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if ( ! $("body").hasClass("no-sticky-m") ) {
                if ( scroll >= nav_offset_top && window.innerWidth > 991 ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
                }
            });
        };
    };
    navbarFixed();
	
	/*----------------------------------------------------*/
    /*  Menu Click js
    /*----------------------------------------------------*/
	function Menu_js(){
		if($('.submenu').length){
			$('.submenu > .dropdown-toggle').click(function() { var location = $(this).attr('href'); window.location.href = location; return false; });
		}
	}
	Menu_js();
	

	/*----------------------------------------------------*/
    /*  Client Slider
    /*----------------------------------------------------*/
    function client_slider(){
        if ( $('.client_slider').length ){
            $('.client_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 6,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots:false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    360: {
                        items: 2,
                    },
                    575: {
                        items: 3,
                    },
                    768: {
                        items: 4,
                    },
                    1024: {
                        items: 6,
                    }
                }
            })
        }
    }
    //client_slider();

	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimonials_slider(){
        if ( $('.c_testi_slider').length ){
            $('.c_testi_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                }
            })
        }
    }
    //testimonials_slider();
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function box_testi_slider(){
        if ( $('.box_testi_slider').length ){
            $('.box_testi_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 1,
                nav: false,
                autoplay: true,
                smartSpeed: 2000,
                dots:false, 
                responsiveClass: true,
            })
        }
    }
    //box_testi_slider();
	
	/*----------------------------------------------------*/
    /*  Service Slider
    /*----------------------------------------------------*/
    function service_slider(){
        if ( $('.service_slider').length ){
            $('.service_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 4,
                nav: false,
                autoplay: true,
                smartSpeed: 2000,
                dots:false, 
				navContainerClass: 'service_arrow',
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    700: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    },
                    1192: {
                        items: 4,
                    }
                }
            })
        }
    }
    //service_slider();
	
	/*----------------------------------------------------*/
    /*  Gallery Slider
    /*----------------------------------------------------*/
    function home_gallery_slider(){
        if ( $('.home_gallery_slider').length ){
            $('.home_gallery_slider').owlCarousel({
                loop:true,
                margin: 0,
                items: 4,
                nav: false,
                autoplay: true,
                smartSpeed: 2000,
                dots:false, 
                responsiveClass: true,
				responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    }
                }
            })
        }
    }
    //home_gallery_slider();

	/*----------------------------------------------------*/
    /*  Gallery One js
    /*----------------------------------------------------*/
	function gallery_isotope(){
		if ( $('.gallery_area').length ){
			
			// Activate isotope in container
            $(".gallery_inner").imagesLoaded( function() {
                $(".gallery_inner").isotope({
					layoutMode: 'fitRows',
					percentPosition:true,
					masonry: {
						columnWidth: 1,
					}            
                }); 
            }); 
			
			// Add isotope click function
			$(".g_fillter ul li").on('click',function(){
				$(".g_fillter ul li").removeClass("active");
				$(this).addClass("active");

				var selector = $(this).attr("data-filter");
                $(".gallery_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
				return false;
			});
		}
	}

	//gallery_isotope();
	
	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
	
	function aLightbox(){
		if($('.light').length){
			$('.imageGallery1 .light').simpleLightbox();
		}
	}
	aLightbox();
	
	/*----------------------------------------------------*/
    /* DateTimePicker js
    /*----------------------------------------------------*/
	function DateTimePicker(){
		if($('#datetimepicker3').length){
			$('#datetimepicker3').datetimepicker({
				format: 'LT'
			});
		}
	}
	DateTimePicker();
	
	/*----------------------------------------------------*/
    /*  DateTimePicker js
    /*----------------------------------------------------*/
	function DateTime(){
		if($('#datetimepicker4').length){
			$('#datetimepicker4').datetimepicker({
				format: 'L'
			});
		}
	}
	DateTime();
	
	/*----------------------------------------------------*/
    /*  Nice Select js
    /*----------------------------------------------------*/
	function nice_select(){
		if($('.nice_select').length){
			$('.nice_select').niceSelect();
		}
	}
	nice_select();
	$(document).ready(function() {

      $('select.orderby').niceSelect();
      /* add classes so that we can do fine tuning cuz of nice select */
      $('.woocommerce-result-count').addClass('nice_sel_on');

    });
	
	/*----------------------------------------------------*/
    /*  Video Popup js
    /*----------------------------------------------------*/
	function video_js(){
		if($('.popup-youtube, .popup-vimeo, .popup-gmaps').length){
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});
		}
	}
	video_js();
	
	/*----------------------------------------------------*/
    /*  Search Popup js
    /*----------------------------------------------------*/
	function popupAnimation(){
		if ( $('.popup-with-zoom-anim').length ){
			$(document).ready(function() {
				$('.popup-with-zoom-anim').magnificPopup({
					type: 'inline',

					fixedContentPos: false,
					fixedBgPos: true,

					overflowY: 'auto',

					closeBtnInside: true,
					preloader: false,

					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-zoom-in'
				});

				$('.popup-with-move-anim').magnificPopup({
					type: 'inline',

					fixedContentPos: false,
					fixedBgPos: true,

					overflowY: 'auto',

					closeBtnInside: true,
					preloader: false,

					midClick: true,
					removalDelay: 300,
					mainClass: 'my-mfp-slide-bottom'
				});
			});
		}
	}
	popupAnimation();
 //init Isotope
    $(window).load(function () {
        if ( $('.gallery_area').length ){
            $(".isotopgrid").imagesLoaded(function () {
                var $grid = $('.isotopgrid').isotope({
                    itemSelector: '.element-item',
                    layoutMode: 'masonry',
                     masonry: {
                     }
                });
                // bind filter button click
                $('.filters-button-group').on('click', '.isotopebutton', function () {
                    var filterValue = $(this).attr('data-filter');
                    // use filterFn if matches value
                    $grid.isotope({filter: filterValue});
                });
                // change is-checked class on buttons
                $('.isotopebutton-group').each(function (i, buttonGroup) {
                    var $buttonGroup = $(buttonGroup);
                    $buttonGroup.on('click', '.isotopebutton', function () {
                        $buttonGroup.find('.is-checked').removeClass('is-checked');
                        $(this).addClass('is-checked');
                    });
                });
            });
        }
    });


 //Misc
    $(window).load(function () {
        if ( $('.dropdown-toggle').length ){
            $('.dropdown-toggle').after('<i class="fa fa-blv-icon mobile_dropdown" aria-hidden="true" data-toggle="dropdown"></i>')
        }
    });

	/*============================*/
	/*  - function on page load */
	/*============================*/
	$(window).load(function(){
		if($('#loader-wrapper').length){
            $('#loader-wrapper').fadeOut('800');
		};
	});

$(function () {
    "use strict"
    $(".dropdown li").on('mouseenter mouseleave', function (e) {
        if ($('ul', this).length) {
            var elm = $('ul:first', this);
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docH = $(".container").height();
            var docW = $(".container").width();

            var isEntirelyVisible = (l + w <= docW);

            if (!isEntirelyVisible) {
                $(this).addClass('edge');
            }
/*
            else {
                $(this).removeClass('edge');
            }
*/
        }
    });
});

})(jQuery)
