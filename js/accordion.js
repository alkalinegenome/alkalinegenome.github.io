$(function() {
	'use strict';
	$('.accordion').find('li').on('click', 'h3', function() {
		$(this).parent().siblings().find('p').slideUp('fast');
		$(this).next('p').slideToggle('fast');
	});
});

$(function() {
	'use strict';
	$('.navccordion').find('nav-top').on('click', '.menu-toggle', function() {
		$(this).parent().siblings().find('li').slideUp('fast');
		$(this).next('li').slideToggle('fast');
	});
});