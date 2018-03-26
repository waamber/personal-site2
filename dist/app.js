(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

//NAV FUCTIONALITY//

$('#about-nav').click(function () {
  $(".main").moveTo(2);
});

$('#projects-nav').click(function () {
  $(".main").moveTo(3);
});

$('#contact-nav').click(function () {
  $(".main").moveTo(4);
});

//PROJECT MODALS//

$(document).ready(function () {
  $("#cache-modal").click(function () {
    $('#cacheModal').modal('show');
  });
});




//CONTACT ICON ANIMATION//

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
},{}]},{},[1]);
