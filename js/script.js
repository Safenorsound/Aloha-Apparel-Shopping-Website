$(document).ready(function() {
  // Flickity Carousel

  $('.main-carousel').flickity({
    cellAlign: 'center',
    contain: true,
    draggable: true,
    prevNextButtons: false,
    autoPlay: true,
    setGallerySize: true,
    freeScroll: false,
    groupCells: true
  });

  $('#nav a').click(function(event) {
    var headerHeight = $('header').height();

    // event.preventDefault();

    $('html, body').animate(
      {
        scrollTop:
          $($.attr(this, 'href')).offset().top - $('header').height() + 5
      },
      500
    );
  });

  // Email validation

  $('.submit-button').click(function(e) {
    e.preventDefault();

    var subEmail = $('#subscribe-form').val();
    if (validateEmail(subEmail)) {
      alert('Thanks for subscribing!');
    } else {
      alert('Please enter a valid email.');
    }
  });
});

function validateEmail(subEmail) {
  var filter = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (filter.test(subEmail)) {
    return true;
  } else {
    return false;
  }
}
