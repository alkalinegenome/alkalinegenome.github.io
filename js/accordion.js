$(function() {
	'use strict';
	$('.accordion').find('li').on('click', 'h3', function() {
		$(this).parent().siblings().find('p').slideUp('fast');
		$(this).next('p').slideToggle('fast');
	});
});