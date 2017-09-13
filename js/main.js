jQuery(document).ready(function($) {

	// $(document).ready(function() {
	// 	$('.popup-gallery').magnificPopup({
	// 		delegate: 'a',
	// 		type: 'image',
	// 		tLoading: 'Loading image #%curr%...',
	// 		mainClass: 'mfp-img-mobile',
	// 		gallery: {
	// 			enabled: true,
	// 			navigateByImgClick: true,
	// 			preload: [0,1] 
	// 		},
	// 		image: {
	// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
	// 			titleSrc: function(item) {
	// 				return item.el.attr('title') + '<small>Lorem title</small>';
	// 			}
	// 		}
	// 	});
	// });



	// $(".navbar-collapse-auto").on("click","a", function (event) {

	// 	event.preventDefault();

	// 	var id  = $(this).attr('href'),

	// 		top = $(id).offset().top-50;
		
	// 	$('body,html').animate({scrollTop: top}, 900);
	// });



	// SMOOTH SCROLL TO ANCHOR
	// $('.link-smooth-transition').click(function(event) {
	// 	$('body, html').animate({
	// 		scrollTop: $( $.attr(this, 'href') ).offset().top-50
	// 	}, 900);
	// 	event.preventDefault();
	// });



	// stiky header
	// $(window).scroll(function() {
	// if ($(document).scrollTop() > 200) {
	// 	$('.custom-nav').addClass('mini-nav');

	// }
	// else {
	// 	$('.custom-nav').removeClass('mini-nav'); }
	// });



	// var lastId,
	// 	topMenu = $(".navbar-collapse-auto"),
	// 	topMenuHeight = topMenu.outerHeight()+15,
	// 	menuItems = topMenu.find("a"),
	// 	scrollItems = menuItems.map(function(){
	// 		var item = $($(this).attr("href"));
	// 		if (item.length) { return item; }
	// 	});


	// menuItems.click(function(e){
	// 	var href = $(this).attr("href"),
	// 			offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+100;
	// 	$('html, body').stop().animate({ 
	// 			scrollTop: offsetTop
	// 	}, 900);
	// 	e.preventDefault();
	// });

	// $(window).scroll(function(){
	// 	 var fromTop = $(this).scrollTop()+topMenuHeight;
		 
	// 	 var cur = scrollItems.map(function(){
	// 		 if ($(this).offset().top < fromTop)
	// 			 return this;
	// 	 });
	// 	 cur = cur[cur.length-1];
	// 	 var id = cur && cur.length ? cur[0].id : "";
		 
	// 	 if (lastId !== id) {
	// 			 lastId = id;
	// 			 menuItems
	// 				 .parent().removeClass("active")
	// 				 .end().filter("[href='#"+id+"']").parent().addClass("active");
	// 	 }
	// });
	

	// WOW
	// new WOW().init();
	// wow = new WOW(
	// 			{
	// 			boxClass:     'wow',      
	// 			animateClass: 'animated', 
	// 			offset:       0,          
	// 			mobile:       false,       
	// 			live:         true        
	// 		}
	// 		)



});