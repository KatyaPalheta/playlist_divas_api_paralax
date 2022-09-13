const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 10,
	slidesPerView: 5,
	loop: true,
	autoplay: {
		delay: 2000,
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 2000,
			},
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 3,
			spaceBetween: 10,
			loop: true,
			autoplay: {
				delay: 2000,
			},
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 5,
			spaceBetween: 40,
			loop: true,
			autoplay: {
				delay: 2000,
			},
		},
	},
});
 