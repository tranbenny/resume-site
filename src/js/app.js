// main app file to main page scrolling, navbar animations/interactions
'use strict';
(function() {

// global variables
var current = $('#aboutLink'); // current section web page is at
$('#home').height($(window).height());
// console.log($('#home').height());
var dimensions = getSectionHeights(); // height dimensions for page section
// console.log(dimensions);


function main() {
  addButtonFunctions();
  initializePage();

  console.log($('#skills').offset().top);
  console.log(dimensions);



}

// sets passed tab as the active tab for navbar tab highlighting
// sets active tab to experience and education if either tab is clicked/scrolled past
function setActiveTab(section) {
  if (current.is($('#experienceLink')) || current.is($('#educationLink'))) {
    $('#experienceLink').removeClass('active');
    $('#educationLink').removeClass('active');
  } else {
    current.removeClass('active');
  }

  current = $('#' + section + 'Link');
  if (section === 'experience' || section === 'education') {
    $('#experienceLink').addClass('active');
    $('#educationLink').addClass('active');
  } else {
    current.addClass('active');
  }
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

  // temporarily removes scrolling function when button is clicked
  // THE SCROLLING ANIMATION IS OFF FOR THE EXPERIENCE SECTION
  $(window).off('scroll', scrollingTab);
  console.log($('#' + section).offset());
  $('html, body').animate({
    scrollTop: $('#' + section).offset().top
  }, 1000, function() {
    $(window).scroll(scrollingTab);
  });
}

// all click interactions for navbar
function addButtonFunctions() {
  // add scrolling function to all navigation items in bar
  $('.nav-item').on('click', scrollToSection);
  $(window).scroll(scrollingTab);
}

// calculates the starting height for all the specific sections of page
// THE DIMENSIONS ARE OFF FOR THE SCROLLING
// THIS IS FOR THE SCROLLING
function getSectionHeights() {
  var navHeight = $('#navbar').height();
  var aboutHeight = $('#home').height();
  // console.log(aboutHeight);
  var experienceHeight = $('#experience').height();
  // console.log(experienceHeight);
  var skillsHeight = $('#skills').height();
  // console.log($('#skills').offset().top);
  // console.log(navHeight + aboutHeight + experienceHeight);
  var projectsHeight = $('#projects').height();
  // console.log(projectsHeight);
  var additionalHeight = $('#additonal').height();
  return {
    about: navHeight,
    experience: aboutHeight + navHeight,
    // skills: aboutHeight + navHeight + experienceHeight,
    // projects: aboutHeight + experienceHeight + skillsHeight + navHeight,
    skills: $('#skills').offset().top,
    projects: $('#projects').offset().top
  };
}

// connects scrolling to page to be linked to active tags on navbar
function scrollingTab(event) {
  event.preventDefault();
  var scroll = $(window).scrollTop();
  // console.log(scroll);
  if (scroll >= 0 && scroll < $('#experience').offset().top - 50) {
    console.log('ON ABOUT PAGE');
    setActiveTab('home');
    // set navbar back to beginning
    setNavInitialBackground();
  }
  if (scroll > $('#experience').offset().top - 50 && scroll < $('#skills').offset().top - 50) {
    setActiveTab('experience');
    console.log('ON EXPERIENCE PAGE');
    $('#workHeader').fadeIn(500);
    $('#educationHeader').fadeIn(500);
    // set navbar to new one
    setNavNextBackground();
  }
  if (scroll > $('#skills').offset().top - 50 && scroll < $('#projects').offset().top - 50) {
    setActiveTab('skills');
    console.log('ON SKILLS PAGE');
    setNavNextBackground();
  }
  if (scroll > $('#projects').offset().top - 50) {
    setActiveTab('projects');
    console.log('ON PROJECTS PAGE');
    setNavNextBackground();
  }
}

// TODO: SET ANIMATION FOR NAVBAR CHANGING
function setNavInitialBackground() {
  $('#navbar-collapse-tabs').css({
    'background-color':'white',
    'opacity':'1'
  });
  $('#navbar-collapse-tabs > ul > li > a').children().css({
    'color':'#4d4d4d'
  });
}

// TODO: SET ANIMATION FOR NAVBAR CHANGING
function setNavNextBackground() {
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
  // hide job sections on initial page load
  $('#radiationSection').hide();
  $('#developerSection').hide();
  $('#courseworkSection').hide();

}


main();



})();
