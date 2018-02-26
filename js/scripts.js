/* ==========================================================================
	Document Ready Function
========================================================================== */

$(window).on("load", function() {
	"use strict";
	$(".loading-overlay").fadeOut(300)
});

// Button Home Get started OnClick
$('.home-section .get-started').on('click', function() {
	$('html,body').animate({
		scrollTop: $('#' + $(this).data('value')).offset().top - 81
	}, 700); // speed of scroll for getting started button
});

$(window).scroll(function() {
	var windowScroll = $(window).scrollTop();
	// Init Navbar Change Background After Scrolling
	if ($(this).scrollTop() >= 5) {
		$('.navbar').addClass('scrolled');
	} else {
		$('.navbar').removeClass('scrolled');
	}
});

// Navbar Scroll Page Down After Click
$('.navbar a').on('click', function() {
	// make a smooth animation on scroll
	$('html,body').animate({
		scrollTop: $('#' + $(this).data('value')).offset().top
	}, 900); // speed of section scroll
});

$(".navbar-toggle").on("click", function() {
	$(".navbar-toggle").toggleClass("change")
});

$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

// Bootstrap Navbar Scrollspy .navbar
$('body').scrollspy({ target: '.navbar'})

// Scroll to top
var o = $("#scroll-top");
$(window).scroll(function() {
	$(this).scrollTop() >= 500 ? o.show() : o.hide()
}), o.on("click", function() {
	$("html,body").animate({
		scrollTop: 0
	}, 2e3)
});
// JavaScript Document
