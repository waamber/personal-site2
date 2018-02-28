"use strict";

$('#cacheBtn').on('shown.bs.modal', function () {
  $('#cacheModal').trigger('focus');
});

$('#github').hover(
  function () {
    $(this).addClass('animated swing');
  }, function () {
    $(this).removeClass('animated swing');
  });

$('#linkedin').hover(
  function () {
    $(this).addClass('animated swing');
  }, function () {
    $(this).removeClass('animated swing');
  });

$('#twitter').hover(
  function () {
    $(this).addClass('animated swing');
  }, function () {
    $(this).removeClass('animated swing');
  });

$('#email').hover(
  function () {
    $(this).addClass('animated swing');
  }, function () {
    $(this).removeClass('animated swing');
  });

$(".card").hover(function () {
  $(this).addClass("flip");
}, function () {
  $(this).removeClass("flip");
});
