jQuery(function($) {

	/* =============== SHOW / HIDE FORM SEARCH =============== */
	$("header .search, #searchForm .close").click(function(){
		$("#searchForm").toggleClass("open");
	});

	/* =============== SHOW / HIDE GOOGLE MAP =============== */
	$("#map .sectionHeading").click(function(){
		$("#map").toggleClass("showMap");
		$(this).find(".text").toggle();
	});

	/* =============== TESTIMONIAL SLIDER =============== */
	$('.testimonialSlider').unslider({
		nav: false,
		arrows: {
			//  Unslider default behaviour
			prev: '<a class="unslider-arrow prev"><i class="mdi mdi-chevron-left"></i></a>',
			next: '<a class="unslider-arrow next"><i class="mdi mdi-chevron-right"></i></a>',
		}
	});

	/* =============== CUSTOM SCROLLBAR STYLE =============== */
	$("#whatWeDo .panel-body").mCustomScrollbar({
		theme:"default"
	});

	/* =============== MAKE MAIN MENU STICKED ON TOP WHEN SCROLL =============== */
	$(window).scroll(function () {
		if ($(this).scrollTop() == $('#header').height() || $(this).scrollTop() > $('#header').height()) {
			$('body').addClass("fixed-nav");
			$('body').css('padding-top', $('#navbar').height() + 'px');
		} else {
			$('body').removeClass("fixed-nav");
			$('body').css('padding-top', 0);
		}
	});
	
	/* =============== ISOTOP =============== */	
	$(window).load(function(){
		$portfolio = $('.portfolioItems');
		$portfolio.isotope({
			itemSelector : 'li',
			layoutMode : 'masonry'
		});
	});
	
	/* =============== PORTFOLIO HOVER EFFECT =============== */
	$('.portfolioItems > li').each( function() { $(this).hoverdir(); } );
	
	/* =============== PERTTYPHOTO =============== */
	$("a.prettyPhoto").prettyPhoto();
	
	/* =============== SMOOTH SCROOL EFFECT =============== */
	$('#navbar ul li a').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	/* =============== SHOW / HIDE GO TO TOP =============== */
	/* Check to see if the window is top if not then display go top button */
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});
	/* Click event to scroll to top */
	$('#scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});