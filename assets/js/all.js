"use strict";

// $(document).ready(function (e) {
//   $('.menu').on('click', function (e) {
//     console.log('sucess');
//     e.preventDefault();
//     $('.header-list').toggleClass('overlay');
//   })
//   console.log('fail');
// });
$(function () {
  $(".btn_open").on("click", function (e) {
    $(".overlay").fadeIn();
  });
  $('.btn_open').on('click', function (e) {
    $('.menu').addClass('show');
  });
  $(".btn_close").on("click", function (e) {
    $(".overlay").fadeOut();
  });
  $('.btn_close').on('click', function (e) {
    $('.menu').removeClass('show');
  });
});
//# sourceMappingURL=all.js.map
