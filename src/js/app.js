// main app file to main page scrolling, navbar animations/interactions
'use strict';
(function() {

// global variables
var current = $('#aboutLink'); // current section tracker
$('#home').height($(window).height());
$('#footer').width($(window).width());

function main() {
  addButtonFunctions();
  initializePage();
  setButtonClickOnSmallScreen();
}

// ISSUE: NEED TO CLICK TWICE TO EXPAND THE WINDOW NOW
function setButtonClickOnSmallScreen() {
    $('.nav-item').on('click', function(event) {
      if ($('#navbar-collapse-tabs').attr('aria-expanded')) {
        $('#navbar-collapse-tabs').attr('aria-expanded', false);
        $('#navbar-collapse-tabs').height(1);
      }
    });
}


// sets passed tab as the active tab for navbar tab highlighting
function setActiveTab(section) {
  current.removeClass('active');
  current = $('#' + section + 'Link');
  current.addClass('active');

}

// handles scrolling animation
function scrollToSection(event) {
  event.preventDefault();
  var section = event.target.innerText.toLowerCase().trim();
  setActiveTab(section);
  // set appropriate navbar color
  if (section === 'home') {
    setNavInitialBackground();
  } else {
    setNavNextBackground();
  }
  $(window).off('scroll', scrollingTab);
  $('html, body').animate({
    scrollTop: $('#' + section).offset().top
  }, 1000, function() {
    $(window).scroll(scrollingTab);
  });
}

// add scrolling function for navbar
function addButtonFunctions() {
  $('.nav-item').on('click', scrollToSection);
  $(window).scroll(scrollingTab);
}


// connects scrolling to page to be linked to active tags on navbar
function scrollingTab(event) {
  event.preventDefault();
  var experienceHeight = $('#experience').offset().top - 70;
  var skillsHeight = $('#skills').offset().top - 200;
  var projectsHeight = $('#projects').offset().top - 200;
  var contactHeight = $('#contact').offset().top - 200;

  var scroll = $(window).scrollTop();
  if (scroll >= 0 && scroll < experienceHeight) {
    setActiveTab('home');
    setNavInitialBackground();
  }
  if (scroll > experienceHeight && scroll < skillsHeight) {
    setActiveTab('experience');
    setNavNextBackground();
  }
  if (scroll > skillsHeight && scroll < projectsHeight) {
    setActiveTab('skills');
    setNavNextBackground();
  }
  if (scroll > projectsHeight && scroll < contactHeight) {
    setActiveTab('projects');
    setNavNextBackground();
  }
  if (scroll > contactHeight) {
    setActiveTab('contact');
    setNavNextBackground();
  }
}

// set white background for navigation bar
function setNavInitialBackground() {
  $('#small-navbar-header').css({
    'background-color':'white',
    'opacity':'1'
  })
  $('#navbar-collapse-tabs').css({
    'background-color':'white',
    'opacity':'1'
  });
  $('#navbar-collapse-tabs > ul > li > a').children().css({
    'color':'#4d4d4d'
  });
}

// set dark background for navigation bar
function setNavNextBackground() {
  $('#small-navbar-header').css({
    'background-color':'#818181',
    'opacity':'0.9'
  });
  $('#navbar-collapse-tabs').css({
    'background-color':'#818181',
    'opacity':'0.9'
  });
  $('#navbar-collapse-tabs > ul > li > a').children().css({
    'color':'white'
  });
}

// hides and shows secitons on inital page load
function initializePage() {
  $('#radiationSection').hide();
  $('#developerSection').hide();
  $('#courseworkSection').hide();
}


main();



})();
