
$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 4000,
    arrows: false // Get rid of that pesky horizontal scrollbar
  });


// https://api.jquery.com/scroll/
// https://api.jquery.com/animate/

  var scrolledFromTop = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - scrolledFromTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      scrolledFromTop = scrollTop;
    } else if (scrolledFromTop - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      scrolledFromTop = scrollTop;
    }
  });
});
