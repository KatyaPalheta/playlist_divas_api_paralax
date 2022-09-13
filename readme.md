# Site Paralax Neon - DIVAS - com API do Spotify

Projeto pessoal

## Índice

- [Visão Geral](#visão-geral)
  - [O desafio](#o-desafio)
  - [Captura de tela](#captura-de-tela)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-eu-aprendi)
  - [Desenvolvimento contínuo](#desenvolvimento-contínuo)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)

## Visão geral

Site responsivo, com background fixo, estilizado com efeito neon nos botões, onde as imagens se sobrepoem umas as outras (efeito palaralax) com uso de API de música incorporando faixas apartir do serviço de straming Spotify

### O desafio

Os usuários devem ser capazes de:

- acessar faixas de músicas atravéz de um player incorporado (acessando apartir de um browser onde o site spotfy foi logado)
- visualizar estado de foco dos botões com efeito neon
- ver as imagens de fundo trocando ao rolar o site
- visualizar layouts adequados em cada tamanho de tela (mobile, desktop, tablet)

### Captura de tela

![Resultado final](/assets/divas/ezgif-4-53e2d27bbd.gif)

### Links

- URL do site ao vivo: (<https://lighthearted-sprite-219367.netlify.app/>)

## Meu processo

Demorei cerca de 20h de trabalho para concluir o desafio

### Construído com

- Marcação HTML5 semântica
- Propriedades personalizadas de CSS
- Flexbox
- Grade CSS
- Uso de API - Spotify - player de música streaming
- Uso de API swiperJS

### O que eu aprendi

-Aprendi sobre a utilização de API e sobre a estilização após incorporação. Bem como a criação de efeito neon nos elementos de interação.

``` html
<section>
   <iframe
    style="border-radius: 12px"
    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2oU49YwtXI2?utm_source=generator"
    width="100%"
    height="380"
    frameborder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
   ></iframe>
  </section>
```

- Aprendi sobre a responsividade do swiper

```JavaScript
const swiper = new Swiper('.swiper', {
 speed: 400,
 spaceBetween: 10,
 slidesPerView: 5,
 loop: true,
 autoplay: {
  delay: 2000,
 },
 breakpoints: {
  320: {
   slidesPerView: 2,
   spaceBetween: 10,
   loop: true,
   autoplay: {
    delay: 2000,
   },
  },
  480: {
   slidesPerView: 3,
   spaceBetween: 10,
   loop: true,
   autoplay: {
    delay: 2000,
   },
  },
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

```

### Desenvolvimento contínuo

Para o futuro vou aprofundar em utilização de layouts diferenciados e o uso de outros apis uteis no dia dia.

## Autor

- URL no front mentor: (<https://www.frontendmentor.io/profile/KatyaPalheta>)
- Linkedin: (www.linkedin.com/in/katyapalheta)

## Agradecimentos

Agradeço a Alura, escola de programação, por ter sido minha fonte de conhecimento e minha amiga na trajetória de crescimento pessoal. Aos membros da comunidade Code, mentoria que está moldando minha mente para o mercado de trabalho.
