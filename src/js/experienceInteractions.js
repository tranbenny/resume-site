'use strict';
(function() {

function main() {
  createRotateButtonInteractions();
  createHeaderInteractions();
}


// toggles showing/hiding the main job description for the windows
function loadDescription(event) {
  // handle clicks for all elements of the job header
  if ($(event.target).is('i')) {
    var targetId = event.target.id + 'Section';
    var arrowId = event.target.id;
  } else if ($(event.target).is('div')) {
    var arrowId = $(event.target).find('i')[0].id;
    var targetId = $(event.target).find('i')[0].id + 'Section';
  } else if ($(event.target).is('h3') || $(event.target).is('p') || $(event.target).is('h4')) {
    var target = $(event.target).parent()[0];
    var arrowId = $(target).find('i')[0].id;
    var targetId = $(target).find('i')[0].id + 'Section';
  }
  // toggles arrow icon
  $('#' + arrowId).toggleClass('rotate');
  $('#' + targetId).slideToggle(1000);
}

// handle/click interactions on rotate button
function createRotateButtonInteractions() {
  $('.rotateButton').on('click', loadDescription);
  // changes cursor when pointer goes over rotation cursor
  $('.rotateButton').hover(function() {
    $(this).css({'cursor':'pointer'});
  }, function() {
    $(this).css({'cursor':'default'});
  });
}

// hover/click interactions over job headers
function createHeaderInteractions() {
  $('.jobHeader').hover(function() {
      $(this).css({'cursor':'pointer', 'opacity':'0.6'});
  }, function() {
      $(this).css({'cursor':'default', 'opacity':'1'});
  });
  $('.jobHeader').on('click', loadDescription);
}





main();

})();
