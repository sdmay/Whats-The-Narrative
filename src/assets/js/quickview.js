jQuery(document).ready(function($){
	//final width --> this is the quick view image slider width
	//maxQuickWidth --> this is the max-width of the quick-view panel
	var sliderFinalWidth = 400,
		maxQuickWidth = 900;

	//open the quick view panel
	$(document).on('click', '.wtn-quickview-trigger', function(event){
		var selectedImage = $(this).parent('.wtn-quickview-item').children('img'),
			slectedImageUrl = selectedImage.attr('src');

		var targetId = $(this).parent('.wtn-quickview-item').attr("id");
		targetId = targetId.replace("container-", "");
		$('body').addClass('overlay-layer');
		animateQuickView(selectedImage, sliderFinalWidth, maxQuickWidth, 'open', targetId);

		//update the visible slider image in the quick view panel
		//you don't need to implement/use the updateQuickView if retrieving the quick view data with ajax
		updateQuickView(slectedImageUrl);
	});

	//close the quick view panel
	$('body').on('click', function(event){
		if( $(event.target).is('.wtn-quickview-close') || $(event.target).is('body.overlay-layer')) {
			var imageId = $(event.target).parent().attr("id");
			closeQuickView( sliderFinalWidth, maxQuickWidth, imageId);
		}
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
			closeQuickView( sliderFinalWidth, maxQuickWidth);
		}
	});

	//quick view slider implementation
	$('.wtn-quickview-quick-view').on('click', '.wtn-quickview-slider-navigation a', function(){
		updateSlider($(this));
	});

	//center quick-view on window resize
	$(window).on('resize', function(){
		if($('.wtn-quickview-quick-view').hasClass('wtn-quickview-is-visible')){
			window.requestAnimationFrame(resizeQuickView);
		}
	});

	function updateSlider(navigation) {
		var sliderConatiner = navigation.parents('.wtn-quickview-slider-wrapper').find('.wtn-quickview-slider'),
			activeSlider = sliderConatiner.children('.wtn-quickview-selected').removeClass('wtn-quickview-selected');
		if ( navigation.hasClass('cd-next') ) {
			( !activeSlider.is(':last-child') ) ? activeSlider.next().addClass('wtn-quickview-selected') : sliderConatiner.children('li').eq(0).addClass('wtn-quickview-selected'); 
		} else {
			( !activeSlider.is(':first-child') ) ? activeSlider.prev().addClass('wtn-quickview-selected') : sliderConatiner.children('li').last().addClass('wtn-quickview-selected');
		} 
	}

	function updateQuickView(url) {
		$('.wtn-quickview-quick-view .wtn-quickview-slider li').removeClass('wtn-quickview-selected').find('img[src="'+ url +'"]').parent('li').addClass('wtn-quickview-selected');
	}

	function resizeQuickView() {
		var quickViewLeft = ($(window).width() - $('.wtn-quickview-quick-view').width())/2,
			quickViewTop = ($(window).height() - $('.wtn-quickview-quick-view').height())/2;
		$('.wtn-quickview-quick-view').css({
		    "top": quickViewTop,
		    "left": quickViewLeft,
		});
	} 

	function closeQuickView(finalWidth, maxQuickWidth, imageId) {
		var close = $('.wtn-quickview-close'),
			activeSliderUrl = close.siblings('.wtn-quickview-slider-wrapper').find('.wtn-quickview-selected img').attr('src'),
			selectedImage = $('.empty-box').find('img');
		//update the image in the gallery
		if( !$('#' + imageId).hasClass('velocity-animating') && $('#' + imageId).hasClass('add-content')) {
			selectedImage.attr('src', activeSliderUrl);
			animateQuickView(selectedImage, finalWidth, maxQuickWidth, 'close', imageId);
		} else {
			closeNoAnimation(selectedImage, finalWidth, maxQuickWidth);
		}
	}

	function animateQuickView(image, finalWidth, maxQuickWidth, animationType, targetId) {
		//store some image data (width, top position, ...)
		//store window data to calculate quick view panel position
		var parentListItem = image.parent('.wtn-quickview-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width(),
			heightSelected = image.height(),
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			finalLeft = (windowWidth - finalWidth)/2,
			finalHeight = finalWidth * heightSelected/widthSelected,
			finalTop = (windowHeight - finalHeight)/2,
			quickViewWidth = ( windowWidth * .8 < maxQuickWidth ) ? windowWidth * .8 : maxQuickWidth ,
			quickViewLeft = (windowWidth - quickViewWidth)/2;

		if( animationType == 'open') {
			//hide the image in the gallery
			parentListItem.addClass('empty-box');
			//place the quick view over the image gallery and give it the dimension of the gallery image
			$('#' + targetId).css({
			    "top": topSelected,
			    "left": leftSelected,
			    "width": widthSelected,
			}).velocity({
				//animate the quick view: animate its width and center it in the viewport
				//during this animation, only the slider image is visible
			    'top': finalTop+ 'px',
			    'left': finalLeft+'px',
			    'width': finalWidth+'px',
			}, 1000, [ 400, 20 ], function(){
				//animate the quick view: animate its width to the final value
				$('#' + targetId).addClass('wtn-quickview-animate-width').velocity({
					'left': quickViewLeft+'px',
			    	'width': quickViewWidth+'px',
				}, 300, 'ease' ,function(){
					//show quick view content
					$('#' + targetId).addClass('add-content');
				});
			}).addClass('wtn-quickview-is-visible');
		} else {
			//close the quick view reverting the animation
			$('#' + targetId).removeClass('add-content').velocity({
			    'top': finalTop+ 'px',
			    'left': finalLeft+'px',
			    'width': finalWidth+'px',
			}, 300, 'ease', function(){
				$('body').removeClass('overlay-layer');
				$('#' + targetId).removeClass('wtn-quickview-animate-width').velocity({
					"top": topSelected,
				    "left": leftSelected,
				    "width": widthSelected,
				}, 500, 'ease', function(){
					$('#' + targetId).removeClass('wtn-quickview-is-visible');
					parentListItem.removeClass('empty-box');
				});
			});
		}
	}
	function closeNoAnimation(image, finalWidth, maxQuickWidth) {
		var parentListItem = image.parent('.wtn-quickview-item'),
			topSelected = image.offset().top - $(window).scrollTop(),
			leftSelected = image.offset().left,
			widthSelected = image.width();

		//close the quick view reverting the animation
		$('body').removeClass('overlay-layer');
		parentListItem.removeClass('empty-box');
		$('.wtn-quickview-quick-view').velocity("stop").removeClass('add-content wtn-quickview-animate-width wtn-quickview-is-visible').css({
			"top": topSelected,
		    "left": leftSelected,
		    "width": widthSelected,
		});
	}
});