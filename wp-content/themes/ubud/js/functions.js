/**
 * Theme functions file
 *
*/

// Mobile Menu.
jQuery(document).ready(function(){
    	jQuery('#site-nav').hide();
		jQuery('a#mobile-menu-btn').click(function () {
		jQuery('#site-nav').slideToggle('fast');
		jQuery('a#mobile-menu-btn').toggleClass('menu-btn-open');
    });
});

// Archives / Grid View Switcher.

jQuery(document).ready(function(){
	jQuery('body').addClass(jQuery.cookie('bodyClass'));

	jQuery('a#list-btn').click(function () {
	jQuery('body').addClass('list-view');
	jQuery('body').removeClass('grid-view');
    jQuery.cookie('bodyClass', 'list-view');
    });

    jQuery('a#grid-btn').click(function () {
		jQuery('body').addClass('grid-view');
		jQuery('body').removeClass('list-view');
		jQuery.cookie('bodyClass', 'grid-view');
    });

});

// About Widget.
jQuery(document).ready(function(){
    	jQuery('.about-full').hide();
		jQuery('a#about-btn').click(function () {
		jQuery('.about-full').show();
		jQuery('body').addClass('about-open');
		jQuery('body').removeClass('about-close');
    });
		jQuery('a#close-btn').click(function () {
		jQuery('.about-full').hide();
		jQuery('body').addClass('about-close');
		jQuery('body').removeClass('about-open');
    });
});
