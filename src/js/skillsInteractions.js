// handles button/section interactions for skills section of webpage

'use strict';
(function() {

function main() {
  showHoverSkill();
  toggleSkillSections();
}

// adds hover option to skill icons
function showHoverSkill() {
  $('.skill-icon').hover(function() {
    $(this).css({
      'opacity':0.5,
      'cursor': 'pointer'
    });
  }, function() {
    $(this).css({
      'opacity': 1
    });
  });
}

// adds toggle function to skill button icons
function toggleSkillSections() {
  $('.skill-icon').on('click', function(event) {
    var id = event.target.id;
    if ($(event.target).is('div')) {
      id = $(event.target).children()[0].id;
    }
    $('#' + id + 'Skills').slideToggle(800);
  });
}



main();


})();
