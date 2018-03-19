"use strict";

$(".main").onepage_scroll({
  sectionContainer: "section",
  easing: "ease",
  animationTime: 1000,
  pagination: true,
  updateURL: false,
  beforeMove: function (index) { },
  afterMove: function (index) { },
  loop: false,
  keyboard: true,
  responsiveFallback: false,
  direction: "vertical"
});

$('#about-nav').click(function () {
  $(".main").moveTo(2);
});

$('#projects-nav').click(function () {
  $(".main").moveTo(3);
});

$('#contact-nav').click(function () {
  $(".main").moveTo(4);
});

$("#github-icon").hover(function () {
  $(this).addClass("animated swing");
});

$("#linkedin-icon").hover(function () {
  $(this).addClass("animated swing");
});

$("#twitter-icon").hover(function () {
  $(this).addClass("animated swing");
});

$("#email-icon").hover(function () {
  $(this).addClass("animated swing");
});