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

function moveToDot() {

}

$('#left').on('click', function(event) {
  projects[current].hide();
  projectsTracker[current].removeClass('activeDot');
  if (current === 0) {
    current = projects.length - 1;
  } else {
    current--;
  }
  projects[current].show();
  projectsTracker[current].addClass('activeDot');
});

$('#right').on('click', function(event) {
  projects[current].hide();
  projectsTracker[current].removeClass('activeDot');
  if (current === projects.length - 1) {
    current = 0;
  } else {
    current++;
  }
  projects[current].show();
  projectsTracker[current].addClass('activeDot');
});




})();
