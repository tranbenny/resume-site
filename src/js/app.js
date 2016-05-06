// main app file to control user interaction on page
'use strict';
(function() {

// global variables
var current = $('#aboutLink'); // current section web page is at
$('#home').height($(window).height());

var dimensions = getSectionHeights(); // height dimensions for page section

console.log($(window).height());
console.log(dimensions.about);


function main() {
  addButtonFunctions();
  initializePage();
  hoverAnimations();
  showHideSkills();

  $('#name').fadeIn(2000);
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

  $('.rotateButton').on('click', function(event) {
    var targetId = event.target.id + "Section";
    // console.log(event.target);
    if ($('#' + event.target.id).hasClass('rotate')) {
      $('#' + event.target.id).removeClass('rotate');
      // $('#' + targetId).hide({duration: 700});
      $('#' + targetId).slideToggle(1000);
    } else {
      $('#' + event.target.id).addClass('rotate');
      $('#' + targetId).slideToggle(1000);
    }
  });

  $('.rotateButton').hover(function() {
    $(this).css({'font-size': '3em', 'cursor':'pointer'});
  }, function() {
    $(this).css({'font-size': '2em', 'cursor':'default'});
  });


  $(window).scroll(scrollingTab);
}

// calculates the starting height for all the specific sections of page
// THE DIMENSIONS ARE OFF FOR THE SCROLLING
function getSectionHeights() {
  var navHeight = $('#navbar').height();
  var aboutHeight = $('#home').height();
  var experienceHeight = $('#experience').height();
  var skillsHeight = $('#skills').height();
  var projectsHeight = $('#projects').height();
  var additionalHeight = $('#additonal').height();
  return {
    about: navHeight,
    experience: navHeight + aboutHeight,
    skills: aboutHeight + experienceHeight - 300,
    projects: aboutHeight + experienceHeight + skillsHeight - 300,
  };
}

// connects scrolling to page to be linked to active tags on navbar
function scrollingTab(event) {
  event.preventDefault();
  var scroll = $(window).scrollTop();
  if (scroll >= 0 && scroll < dimensions.experience) {
    setActiveTab('home');
    // set navbar back to beginning
    setNavInitialBackground();

  } else if (scroll > dimensions.experience && scroll < dimensions.skills) {
    setActiveTab('experience');
    // set navbar to new one
    setNavNextBackground();
  } else if (scroll > dimensions.skills && scroll < dimensions.projects) {
    setActiveTab('skills');
  } else if (scroll > dimensions.projects) {
    setActiveTab('projects');
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
}

// shows/hides the skills sections when button is clicked
function showHideSkills() {
    $('.skill-icon').on('click', function(event) {
      var id = event.target.id;
      if ($(event.target).is('div')) {
        id = $(event.target).children()[0].id;
      }
      $('#' + id + 'Skills').slideToggle(1000);
    });
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
