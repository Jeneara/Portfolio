// Tiny Slider
document.querySelectorAll('.my-slider').forEach(slider => {
    tns({
        container: slider,
        items: 3,
        autoplay: false,
        mouseDrag: true,
        swipeAngle: false,
        speed: 1000,
        touch: true,
        autoheight: true,
        controlsPosition: "bottom",
        navAsThumbnails: true,
        // edgePadding: 50,
        // fixedWidth: 500,
        responsive: {
            340: {
                edgePadding: 20,
                gutter: 20,
                items: 1
            },
            700: {
                edgePadding: 20,
                gutter: 30,
                items: 1
            },
            900: {
                items: 1
            }
        }
    });
});


// Scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarMain',
    offset: 100,
})





