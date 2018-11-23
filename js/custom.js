function oneway() {
    document.getElementById("returndate").disabled = true;
}
function round() {
    document.getElementById("returndate").disabled = false;
}


// owlCarousel
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      pagination:false,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
     $(".our_team").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      pagination:false,
      items : 1,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});
// counter js
 jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });





 jQuery(document).ready(function($) {
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
});



// news
 var i = 0;

$(document).ready(function(){
  var interval = setInterval(function () {
    i += 4; // speed
    $('#news').animate({ scrollTop: i }, 1);
    if (i >= $('#news').prop('scrollHeight') - $('#news').height()) {
      i = 0;
    }
  }, 100);
});



 // scroll up js

 
// ===== Scroll to Top ==== 
      $(window).scroll(function() {
          if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
              $('#return-to-top').fadeIn(200);    // Fade in the arrow
          } else {
              $('#return-to-top').fadeOut(200);   // Else fade out the arrow
          }
      });
      $('#return-to-top').click(function() {      // When arrow is clicked
          $('body,html').animate({
              scrollTop : 0                       // Scroll to top of body
          }, 500);
      });