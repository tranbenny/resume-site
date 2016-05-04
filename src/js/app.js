// main app file to control user interaction on page
'use strict';
(function() {

// handle navbar clicking and scrolling
function scrollToSection(event) {
  var section = event.target.innerText.toLowerCase();
  // sets correct tab to be active
  // fix this: make it run sync, sometimes the active highlighting doesn't work
  $('.nav-item').each(function(value) {
    $(this).removeClass('active');
  });

  $('#' + section + 'Link').addClass('active');
  // scrolling animation to section
  $('html, body').animate({
    scrollTop: $('#' + section).offset().top
  }, 1000);
}

// add scrolling function to all navigation items in bar
$('.nav-item').on('click', scrollToSection);

// adds rotation button to icons and toggles description sections
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

// hide job sections on initial page load
$('#radiationSection').hide();
$('#developerSection').hide();
$('#courseworkSection').hide();



})();
