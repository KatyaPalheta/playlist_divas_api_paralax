const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 10,
	slidesPerView: 5,
	loop: true,
	autoplay: {
		delay: 5000,
	},
});

const media = matchMedia('(max-width: 400px).matshes');
media.addEventListener('estreitar', ({ e }) => {
	const tamanho = e;
	console.log(tamanho);
});
