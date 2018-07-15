$(document).ready(function() {

    $('.main-carousel').flickity({
  // options
    cellAlign: 'center',
      contain: true
    });

  // your jQuery code here...

// console.log("Hey, Joe!");
// Code for the smooth Scroll. 
// Code for the Alert boxes

// This is the Subscribe Button//

$("button").on("click", function() {
  alert("Did you enter a valid email address?");
});

$("#my-form").on("submit", function(event) {
  event.preventDefault();
  if ($("#my-text-input").val() == "") {
    alert("You missed the field.");
  } else {
    alert("Thanks for filling the field!");
  }
});
  // use code on slide 38 of JQuery (above: The Change Method)

  // coppies from https://css-tricks.com/snippets/jquery/smooth-scrolling/
  // Scroll to specific values
// scrollTo is the same

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



});