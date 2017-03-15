jQuery(document).ready(function($){
	var resizing = false,
		navigationWrapper = $('.wtn-main-nav-wrapper'),
		navigation = navigationWrapper.children('.wtn-main-nav'),
		searchForm = $('.wtn-main-search'),
		pageContent = $('.cd-main-content'),
		searchTrigger = $('.wtn-search-trigger'),
		coverLayer = $('.wtn-cover-layer'),
		navigationTrigger = $('.wtn-nav-trigger'),
		mainHeader = $('.wtn-main-header');
	
	function checkWindowWidth() {
		var mq = window.getComputedStyle(mainHeader.get(0), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
		return mq;
	}

	function checkResize() {
		if( !resizing ) {
			resizing = true;
			(!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
		}
	}

	function moveNavigation(){
  		var screenSize = checkWindowWidth();
        if ( screenSize == 'desktop' && (navigationTrigger.siblings('.wtn-main-search').length == 0) ) {
        	//desktop screen - insert navigation and search form inside <header>
        	searchForm.detach().insertBefore(navigationTrigger);
			navigationWrapper.detach().insertBefore(searchForm).find('.cd-serch-wrapper').remove();
		} else if( screenSize == 'mobile' && !(mainHeader.children('.wtn-main-nav-wrapper').length == 0)) {
			//mobile screen - move navigation and search form after .cd-main-content element
			navigationWrapper.detach().insertAfter('.cd-main-content');
			var newListItem = $('<li class="cd-serch-wrapper"></li>');
			searchForm.detach().appendTo(newListItem);
			newListItem.appendTo(navigation);
		}

		resizing = false;
	}

	function closeSearchForm() {
		searchTrigger.removeClass('wtn-search-form-visible');
		searchForm.removeClass('is-visible');
		coverLayer.removeClass('wtn-search-form-visible');
	}

	//add the .no-pointerevents class to the <html> if browser doesn't support pointer-events property
	( !Modernizr.testProp('pointerEvents') ) && $('html').addClass('no-pointerevents');

	//move navigation and search form elements according to window width
	moveNavigation();
	$(window).on('resize', checkResize);

	//mobile version - open/close navigation
	navigationTrigger.on('click', function(event){
		event.preventDefault();
		mainHeader.add(navigation).add(pageContent).toggleClass('wtn-nav-is-visible');
	});

	searchTrigger.on('click', function(event){
		event.preventDefault();
		if( searchTrigger.hasClass('wtn-search-form-visible') ) {
			searchForm.find('form').submit();
		} else {
			searchTrigger.addClass('wtn-search-form-visible');
			coverLayer.addClass('wtn-search-form-visible');
			searchForm.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				searchForm.find('input[type="search"]').focus().end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
			});
		}
	});

	//close search form
	searchForm.on('click', '.wtn-close', function(){
		closeSearchForm();
	});

	coverLayer.on('click', function(){
		closeSearchForm();
	});
	
	$(document).keyup(function(event){
		if( event.which=='27' ) closeSearchForm();
	});

	//upadate span.selected-value text when user selects a new option
	searchForm.on('change', 'select', function(){
		searchForm.find('.selected-value').text($(this).children('option:selected').text());
	});
});