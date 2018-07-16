$(document).ready(function() {

//   var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true,
// });

// Flickity Scripts

// I couldn't make it functional. 
// displaying blank images and overlapping into the next section

$('.main-carousel').flickity({
  cellAlign: "center",
  contain: true,
  draggable: true,
  prevNextButtons: false,
  autoPlay: true,
  setGallerySize: true,
  freeScroll: false,
  groupCells: true
});

 // smooth scroll
//  attempted from astack over-flow suggestion:
// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link

 $(document).on('click','a', function(event){
  // Get the height of the header
  var headerHeight = $('header').height();

  event.preventDefault();

  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top - $('header').height() + 5
  }, 500);
});



// Code for the Alert boxes

// This is the Subscribe Button//

// $("button").on("click", function() {
//   alert("Did you enter a valid email address?");
// });

  // use code on slide 38 of JQuery (above: The Change Method)

  
// This was adapeted from the following project:
// https://github.com/KC74/project_aloha/blob/master/js/scripts.js

$("#button").on("submit", function(event) {
  event.preventDefault();
  if ($("#my-text-input").val() == "") {
    alert("Did you enter a valid email address?.");
  } else {
    alert("Thank you for subscribing!");
  }
});

  // coppies from https://css-tricks.com/snippets/jquery/smooth-scrolling/
  // Scroll to specific values
// scrollTo is the same

// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });

// });



}); // doc ready