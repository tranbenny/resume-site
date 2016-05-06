'use strict';
(function() {

// TODO: ADD SLIDING ANIMATION FOR SLIDER


var projectsTracker = [$('#project1dot'), $('#project2dot')];
var projects = [$('#project1'), $('#project2')];
var current = 0;

function moveRight() {

}

function moveLeft() {

}

// click function for dot tracker
function moveToDot(event) {
  if (!$(event.target).hasClass('activeDot')) {
    projects[current].fadeOut(1000);
    projectsTracker[current].removeClass('activeDot');
    $('.projectContainer').hide();
    if (event.target.id === 'project1dot') {
      current = 0;
    } else {
      current = 1;
    }
    projects[current].fadeIn(1000);
    projectsTracker[current].addClass('activeDot');

  }
}

$('#left').on('click', function(event) {
  projects[current].fadeOut(1000);
  projectsTracker[current].removeClass('activeDot');
  $('.projectContainer').hide();
  if (current === 0) {
    current = projects.length - 1;
  } else {
    current--;
  }
  projects[current].fadeIn(1000);
  projectsTracker[current].addClass('activeDot');
});

$('#right').on('click', function(event) {
  projects[current].fadeOut(1000);
  projectsTracker[current].removeClass('activeDot');
  $('.projectContainer').hide();
  if (current === projects.length - 1) {
    current = 0;
  } else {
    current++;
  }
  projects[current].fadeIn(1000);
  projectsTracker[current].addClass('activeDot');
});

$('#project1dot').hover(function() {
  $(this).css({'cursor':'pointer'});
}, function() {
  $(this).css({'cursor':'default'});
});

$('#project2dot').hover(function() {
  $(this).css({'cursor':'pointer'});
}, function() {
  $(this).css({'cursor':'default'});
});

$('#project1dot').on('click', moveToDot);
$('#project2dot').on('click', moveToDot);





})();
