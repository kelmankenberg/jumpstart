// $(document).ready(function () {
//   // $('.carousel').slick({
//   //   arrows: false,
//   //   autoplay: true,
//   //   autoplaySpeed: 2000,
//   //   fade: true
//   // });
//   $('.carousel').slick({
//     // slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     draggable: false,
//     pauseOnFocus: false,
//     pauseOnHover: true
//   });
// });

$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    arrows: false // Get rid of that pesky horizontal scrollbar
  });
});
