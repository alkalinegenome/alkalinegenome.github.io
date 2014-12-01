$(document).ready(function() {  
var stickyNavTop = $('.nav-top').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop + 375) {   //375 works
    $('.nav').addClass('sticky');  
	$('.nav img').css({ 'display': 'none' });	
	$('.nav').css({'background-color':'#F5F5F5'});
} else {  
	$('.nav img').css({ 'display': 'block' });	
    $('.nav').removeClass('sticky');   
}  
};  
  
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
