/* ==========================================================================
	Document Ready Function
========================================================================== */

$(window).on("load", function() {
	"use strict";
	$(".loading-overlay").fadeOut(300)
});

// Button Home Get started
$('.home-section .get-started').on('click', function() {
	$('html,body').animate({
		scrollTop: $('#' + $(this).data('value')).offset().top - 81
	}, 1500);
});

$(window).scroll(function() {
	// Navbar Change Active On Scroll
	var windowScroll = $(window).scrollTop();
	$('section').each(function(i) {
		if ($(this).position().top <= windowScroll + 100) {
			$('.navbar .navbar-nav li.active').removeClass('active');
			$('.navbar .navbar-nav li').eq(i).addClass('active');
		}
	});
	//Navbar Change Background After Scrolling
	if ($(this).scrollTop() >= 200) {
		$('.navbar').addClass('scrolled');
	} else {
		$('.navbar').removeClass('scrolled');
	}
});

// Navbar Scroll After Click
$('.navbar a').on('click', function(e) {
	e.preventDefault();
	// change active element navbar
	$('.navbar .navbar-nav li').removeClass('active');
	$(this).addClass('active');
	// make an animation on scroll
	$('html,body').animate({
		scrollTop: $('#' + $(this).data('value')).offset().top - 81
	}, 1200);
});

$(".navbar-toggle").on("click", function() {
	$(".navbar-toggle").toggleClass("change")
});

$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

var o = $("#scroll-top");
$(window).scroll(function() {
	$(this).scrollTop() >= 500 ? o.show() : o.hide()
}), o.on("click", function() {
	$("html,body").animate({
		scrollTop: 0
	}, 2e3)
});
// JavaScript Document
