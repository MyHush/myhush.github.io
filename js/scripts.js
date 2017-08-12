/* ==========================================================================
	Document Ready Function
========================================================================== */
jQuery(document).ready(function () {
	'use strict';

	/* ==========================================================================
		Page Loader
	========================================================================== */
	$("body").imagesLoaded(function(){
		$(".page-loader div").fadeOut();
		$(".page-loader").delay(300).fadeOut("slow");
	});

	/* ==========================================================================
		Superfish
	========================================================================== */
	$('ul.sf-menu').superfish({
		delay: 50,
		speed: 'fast',
		cssArrows: true,
		disableHI: false,
		easing: 'fade',
		touchMove: false,
		swipe: false
	});

	/* ==========================================================================
		Mobile Menu
	========================================================================== */
	$(function() {

		var $menu = $('#mobile-menu'),
		$body = $('body'),
		$fn = $('#mobile-menu'),
		$fnToggle = $('.toggle-mnu'),
		$window = $(window);

		$menu.find('.menu-item-has-children > a').on('click', function(e) {
			e.preventDefault();
			if ($(this).next('ul').is(':visible')) {
				$(this).removeClass('sub-active').next('ul').slideUp(250);
			} else {
				$('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
				$(this).addClass('sub-active').next('ul').slideToggle(250);
			}
		});

		var fnOpen = false;

		var fnToggleFunc = function() {
			fnOpen = !fnOpen;
			$body.toggleClass('fullscreen-nav-open');
			$fn.stop().fadeToggle(500);
			$fn.toggleClass("active");
			$('.toggle-mnu').toggleClass('on');
			$('.logo').toggleClass('light-logo');

			return false;
		};

		$fnToggle.on('click', fnToggleFunc);

		$(document).on('keyup', function(e) {
			if (e.keyCode == 27 && fnOpen) {
				fnToggleFunc();
			}
		});

		$fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
			fnToggleFunc();
			return true;
		});

		$menu.on('click', function(){
			fnToggleFunc();
			return true;
		});

		$('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
			e.stopPropagation();
		});
	});

	/* ==========================================================================
		Sticky Menu
	========================================================================== */
	$('#top-nav').sticky({
		topSpacing: 0,
		zIndex: 40
	});

	/* ==========================================================================
		Smooth Scroll to link
	========================================================================== */
	$('a.smooth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 50
		}, {
			duration: 1000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});

	/* ==========================================================================
		Particles JS Load
	========================================================================== */
	particlesJS.load('particles-js', 'js/particlesjs-config.json');

	/* ==========================================================================
		Tooltips
	========================================================================== */
	$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

	/* ==========================================================================
		Back to Top
	========================================================================== */
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px

		backToTop = function () {
			var scrollTop = $(window).scrollTop();

			if (scrollTop > scrollTrigger) {
				$('#back-to-top').addClass('show');
			} else {
				$('#back-to-top').removeClass('show');
			}
		};

		backToTop();

		$(window).on('scroll', function () {
			backToTop();
		});

		$('#back-to-top').on('click', function (e) {
			e.preventDefault();

			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

}); // JavaScript Document
