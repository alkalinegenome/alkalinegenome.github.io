// JavaScript Document -- TOGGLE JS
/*
var navTop = document.querySelector('.nav-toggle');

document.querySelector('.nav-btn').addEventListener('click', function(e){
	e.preventDefault();
	if(navTop.getAttribute('data-state') == 'expanded'){
		navTop.setAttribute('data-state','collapsed');
	}else{
		navTop.setAttribute('data-state','expanded');

	}
}); */

// Sticky Nav

$(document).ready(function() {  
var stickyNavTop = $('.nav-top').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (window.screen.width >= 768) {	
	if (scrollTop > stickyNavTop + 375) {   // + 375 works
		$('.nav').addClass('sticky');  
		$('.nav img').css({ 'transform': 'translateY(-300px)' });		
		$('.nav img').css({ 'width': '0' });		
		$('.nav').css({'background-color':'#F5F5F5'});
		$('.nav-top li').css({'border-bottom':'2px solid #FA8072'});
	
		//			alert('active');
	} else {  
		$('.nav img').css({ 'transform': 'translateY(0px)' });		
		$('.nav img').css({ 'width': '15%' });		
		$('.nav').removeClass('sticky');   
		$('.nav-top li').css({'border-bottom':'none'});
	}  
	};  
}
 
stickyNav();  

$(window).scroll(function() {  
    stickyNav();  
});  
}); 

//nav icons 

var $navicons = $('.menu-btn');
var $navsection = $('.nav-top');

$navsection.waypoint(function () {
	$navicons.addClass('js-navicon-launch');
}, {offset: '50%'});

// Nav Toggle 2
/*
$(function() {
	'use strict';
	$('.accordion').find('li').on('click', 'h3', function() {
		$(this).parent().siblings().find('p').slideUp('fast');
		$(this).next('p').slideToggle('fast');
	});
}); */

$(function() {
	'use strict';
	$('.toggle').find('a').on('click', 'h3', function() {
		$(this).find('nav').slideUp('fast');
		alert('active');
/*		$(this).next('.nav-icons').slideToggle('fast');*/
	});
});
