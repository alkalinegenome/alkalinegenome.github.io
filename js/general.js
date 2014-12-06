$(document).ready(function() {  
var stickyNavTop = $('.nav-top').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop + 375) {   // + 375 works
    $('.nav').addClass('sticky');  
	$('.nav img').css({ 'transform': 'translateY(-300px)' });		
	$('.nav img').css({ 'width': '0' });		
	$('.nav').css({'background-color':'#F5F5F5'});
	$('.nav-top').css({'border-top':'1px solid red'});

	//			alert('active');
} else {  
	$('.nav img').css({ 'transform': 'translateY(0px)' });		
	$('.nav img').css({ 'width': '15%' });		
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