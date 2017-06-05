'use strict';

$(document).ready(function () {

	$('.header__menu ul').clone().appendTo('.mmenu-nav');

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: 'Меню'
		},
		extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
		offCanvas: {
			'position': 'right'
		},
		counters: true
	});

	var $icon = $('.js-navtrigger');
	var API = $menu.data('mmenu');

	$icon.on('click', function () {
		API.open();
	});

	API.bind('open:start', function ($panel) {
		$('.js-navtrigger').toggleClass('-active');
	});

	API.bind('close:start', function ($panel) {
		$('.js-navtrigger').toggleClass('-active');
	});

	if (Modernizr.mq('(max-width: 767px)')) {
		var init = function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [48.706413, 44.463310],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([48.706413, 44.463310], {
					balloonContentHeader: 'Freeway-bike.ru',
					balloonContentBody: 'Волгоград, ул. яблочная, 38а'

				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};

		$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
			API.close();
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return true;
				}
			}
		});
		var myMap, myPlacemark;

		ymaps.ready(init);
		;
	} else {
		var _init = function _init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [48.706413, 44.460310],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([48.706413, 44.463310], {
					balloonContentHeader: 'Freeway-bike.ru',
					balloonContentBody: 'Волгоград, ул. яблочная, 38а'
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};

		$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return true;
				}
			}
		});
		var myMap, myPlacemark;

		ymaps.ready(_init);
		;
	}
});