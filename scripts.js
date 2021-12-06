// Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarMain',
    offset: 100,
})

// Owl Carousel
var slider = tns({
    container: '.my-slider',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });