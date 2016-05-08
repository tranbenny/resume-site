var project1Focused = false;
var project2Focused = false;

$('#specifics2').hide();


// grows and shrinks project 1
$('#project1').on('click', function(event) {
  event.preventDefault();
  if (project1Focused === false) {

    project1Focused = true;
    $('#imageContainer').removeClass('col-md-12');
    $('#imageContainer').addClass('col-md-7');

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


  } else {
    project1Focused = false;

    $('#imageContainer').removeClass('col-md-7');
    $('#imageContainer').addClass('col-md-12');

    $('#image1').css({
      'height':'75%'
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

  }
});

// grows and shrinks project 2
$('#project2').on('click', function(event) {
  event.preventDefault();
  if (project2Focused === false) {

    project2Focused = true;

    $('#image2').css({
      'height':'100%'
    });

    $('#project1').animate({
      height:'0px',
      width:'0px'
    }, function() {
      $('#project1').hide();
    });
    $('#project2Title').hide();


    $('#project2').animate({
      height:'500px',
      width:'900px'
    });

    $('#headlinesImage').css({
      'height':'80%',
      'width':'80%'
    });
    $('#specifics2').show();
  } else {
    project2Focused = false;
    $('#specifics2').hide();
    $('#project1').animate({
      height:'300px',
      width:'450px'
    });

    $('#image2').css({
      'height':'75%'
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
  }
});

// adds hover function over project windows
$('.projectContainer').hover(function() {
    $(this).css({
      'background-color':'lightgray',
      'opacity':0.6,
      'cursor':'pointer'
    });
}, function() {
    $(this).css({
      'background-color':'white',
      'opacity':1,
      'cursor':'default'
    });
});

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

}
