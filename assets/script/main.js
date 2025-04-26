// ハンバーガーメニュー
$(function () {
	var hamburger = $('.hamburger-menu');
	var hamburgerButton = $('.hamburger-menu__button');
	var menuLinks = $('.hamburger-menu a');

	hamburgerButton.on('click', function () {
		hamburger.toggleClass('hamburger-menu-active');
	});

	menuLinks.on('click', function () {
		hamburger.removeClass('hamburger-menu-active');
	});

	$(window).on('resize', function () {
		hamburger.removeClass('hamburger-menu-active');
	});
});

// swiper
document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".carousel", {
        loop: false,
        spaceBetween: 15,
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });
});

// アコーディオン
$('.qa__question').on('click', function (e) {
    $(this).toggleClass('open')
    var content = $(this).next();

    content.slideToggle();
});