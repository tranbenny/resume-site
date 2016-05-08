'use strict';
(function() {


var project1Focused = false;
var project2Focused = false;


function main() {
  addHoverInteraction();
  addProject1Click();
  addProject2Click();
}

// grows and shrinks project 1
function addProject1Click() {
  $('#project1').on('click', function(event) {
    event.preventDefault();
    if (project1Focused === false) {
      project1Focused = true;
      $('#imageContainer').removeClass('col-md-12');
      $('#imageContainer').addClass('col-md-7');
      $('#imageContainer').css({
        'height':'100%'
      });
      $('#image1').css({
        'height':'100%'
      });
      $('#project1').animate({
        height:'500px',
        width: '900px'
      }, function() {
        $('#project2').hide();
      });
      $('#project1Title').hide();
      $('#project2').animate({
        height:'0px',
        width:'0px'
      });
      $('#specifics1').show(100);
      $('#projects').css({'overflow':'auto'});
    } else {
      project1Focused = false;
      $('#imageContainer').removeClass('col-md-7');
      $('#imageContainer').addClass('col-md-12');
      $('#imageContainer').css({
        'height':'80%'
      });
      $('#image1').css({
        'height':'80%'
      });
      $('#project1').animate({
        height:'300px',
        width: '450px'
      });
      $('#specifics1').hide(500);
      $('#project2').animate({
        height:'300px',
        width: '450px'
      });
      $('#project1Title').show();
      $('#project2').show();
      $('#projects').css({'overflow':'visible'});
    }
  });
}

// grows and shrinks project 2
function addProject2Click() {
  $('#project2').on('click', function(event) {
    event.preventDefault();
    if (project2Focused === false) {
      project2Focused = true;
      $('#image2').css({
        'height':'80%'
      });
      $('#project1').animate({
        height:'0px',
        width:'0px'
      }, function() {
        $('#project1').hide();
      });
      $('#project2Title').hide();
      $('#project2').animate({
        height:$('#specifics2').height(),
        width:'900px'
      });
      $('#headlinesImage').css({
        'height':'80%',
        'width':'80%'
      });
      $('#specifics2').show();
      $('#projects').css({'overflow':'auto'});
    } else {
      project2Focused = false;
      $('#specifics2').hide();
      $('#project1').animate({
        height:'300px',
        width:'450px'
      });
      $('#image2').css({
        'height':'60%'
      });
      $('#headlinesImage').css({
        'height':'100%',
        'width':'100%'
      });
      $('#project2').animate({
        height:'300px',
        width: '450px'
      });
      $('#project2Title').show();
      $('#project1').show();
      $('#projects').css({'overflow':'visible'});
    }
  });
}

// adds hover function over project sections
function addHoverInteraction() {
  $('.projectContainer').hover(function() {
      $(this).css({
        'background-color':'lightgray',
        'opacity':0.6,
        'cursor':'pointer',
      });

      $('#specifics1').css({
        'background-color':'lightgray',
        'opacity':0.6,
        'cursor':'pointer',
      });

      $('#specifics2').css({
        'background-color':'lightgray',
        'opacity':0.6,
        'cursor':'pointer',
      });

  }, function() {
      $(this).css({
        'background-color':'white',
        'opacity':1,
        'cursor':'default',
      });

      $('#specifics1').css({
        'background-color':'white',
        'opacity':1,
        'cursor':'default',
      });

      $('#specifics2').css({
        'background-color':'white',
        'opacity':1,
        'cursor':'default',
      });
  });



}

main();


})();
