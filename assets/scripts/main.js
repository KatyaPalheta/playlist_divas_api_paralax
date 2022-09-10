const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 10,
	slidesPerView: 5,
	loop: true,
	autoplay: {
		delay: 5000,
	},
});

const media = matchMedia('(max-width: 400px)');
media.addEventListener('estreitar', ({ media, matches }) => {
	let tamanho = (media, matches);
	console.log(tamanho);
});
