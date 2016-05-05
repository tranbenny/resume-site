// main app file to control user interaction on page
'use strict';
(function() {

// global variables
var current = $('#aboutLink'); // current section web page is at
var dimensions = getSectionHeights(); // height dimensions for page section
// create a global variable of the current project as well


function main() {
  addButtonFunctions();
  initializePage();
  hoverAnimations();
  // console.log($(window).width());
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
  var section = event.target.innerText.toLowerCase().trim();
  setActiveTab(section);
  // temporarily removes scrolling function when button is clicked
  $(window).off('scroll', scrollingTab);
  $('html, body').animate({
    scrollTop: $('#' + section).offset().top
  }, 1000, function() {
    $(window).scroll(scrollingTab);
  });
}

// all click interactions on webpage
function addButtonFunctions() {
  // add scrolling function to all navigation items in bar
  $('.nav-item').on('click', scrollToSection);
  // adds rotation button to icons and toggles description sections
  // ISSUE: lags on coursework rotation, buttons not working
  // TODO: change diagonal animation to vertical animation
  $('.rotateButton').on('click', function(event) {
    var targetId = event.target.id + "Section";
    if ($('#' + event.target.id).hasClass('rotate')) {
      $('#' + event.target.id).removeClass('rotate');
      $('#' + targetId).hide({duration: 700});
    } else {
      $('#' + event.target.id).addClass('rotate');
      $('#' + targetId).show({duration: 700});
    }
  });

  $(window).scroll(scrollingTab);
}

// calculates the starting height for all the specific sections of page
function getSectionHeights() {
  var navHeight = $('#navbar').height();
  var aboutHeight = $('#about').height();
  var experienceHeight = $('#experience').height();
  var skillsHeight = $('#skills').height();
  var projectsHeight = $('#projects').height();
  var additionalHeight = $('#additonal').height();
  return {
    about: navHeight,
    experience: navHeight + aboutHeight,
    skills: navHeight + aboutHeight + experienceHeight,
    projects: navHeight + aboutHeight + experienceHeight + skillsHeight,
    additional: navHeight + aboutHeight + experienceHeight + skillsHeight + projectsHeight
  };
}

// connects scrolling to page to be linked to active tags on navbar
function scrollingTab(event) {
  event.preventDefault();
  var scroll = $(window).scrollTop();
  if (scroll > dimensions.about && scroll < dimensions.experience) {
    setActiveTab('about');
  } else if (scroll > dimensions.experience && scroll < dimensions.skills) {
    setActiveTab('experience');
  } else if (scroll > dimensions.skills && scroll < dimensions.projects) {
    setActiveTab('skills');
  } else if (scroll > dimensions.projects && scroll < dimensions.additional) {
    setActiveTab('projects');
  } else if (scroll > dimensions.additional) {
    setActiveTab('additional');
  }
}

// add hover animations to webpage
function hoverAnimations() {
    // TODO: add click function
    $('#project1').hover(function() {
      $('#project1Title').css({'font-size':38, 'opacity':0.5});
    }, function() {
      $('#project1Title').css({'font-size':24, 'opacity': 1});
    });

    // TODO: add click function
    $('#project2').hover(function() {
      $('#project2Title').css({'font-size':38, 'opacity':0.5});
    }, function() {
      $('#project2Title').css({'font-size':24, 'opacity': 1});
    });


    // skills icons hover function, set opacity
    $('.skill-icon').hover(function() {
      $(this).css({'opacity': 0.5, 'cursor' :'pointer'});
    }, function() {
      $(this).css({'opacity': 1});
    });

    $('.sliderArrow').hover(function() {
      $(this).css({'opacity':1, 'cursor':'pointer'});
    }, function() {
      $(this).css({'opacity':0.6, 'cursor':'default'});
    });


    // TODO: add opacity hovering to jobs, skills, and projects
}

// hides and shows secitons on inital page load
function initializePage() {
  // hide job sections on initial page load
  $('#radiationSection').hide();
  $('#developerSection').hide();
  $('#courseworkSection').hide();

  addProjects(2);
  // $('#skills').css({'margin-left': $(window).width() / 4});
  $('#project1dot').addClass('activeDot');
}

// sets number of projects to be tracked
function addProjects(number) {
  for (var i = 1; i <= number; i++) {
    $('#sliderTracker').append('<i class="fa fa-circle top-spacing left-spacing dot" style="color:black;" id="project' + i + 'dot"></i>');
  }
}


main();



})();
