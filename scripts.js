//Navbar hamburger Close on click
if (window.innerWidth < 992) {
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
};

