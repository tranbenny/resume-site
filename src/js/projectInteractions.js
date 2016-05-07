var project1Focused = false;
var project2Focused = false;

$('#specifics2').hide();


// grows and shrinks project 1
$('#project1').on('click', function(event) {
  event.preventDefault();
  if (project1Focused === false) {
    project1Focused = true;
    // $('#project1Title').hide();
    // $('#project2').hide();
    $('#project1').animate({
      height:'500px',
      width: '900px'
    }, function() {
      $('#project2').hide();
    });

    $('#project2').animate({
      height:'0px',
      width:'0px'
    });
    $('#specifics1').show(100);
  } else {
    project1Focused = false;
    $('#project1').animate({
      height:'300px',
      width: '450px'
    });
    $('#specifics1').hide(500);

    $('#project2').animate({
      height:'300px',
      width: '450px'
    });


    $('#project2').show();

  }
});

// grows and shrinks project 2
$('#project2').on('click', function(event) {
  event.preventDefault();
  if (project2Focused === false) {
    project2Focused = true;
    $('#project1').animate({
      height:'0px',
      width:'0px'
    }, function() {
      $('#project1').hide();
    });
    /*
    $('#headlinesImage').css({
      'height':'80%',
      'width':'80%'
    });*/


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

    $('#headlinesImage').css({
      'height':'100%',
      'width':'100%'
    });

    $('#project2').animate({
      height:'300px',
      width: '450px'
    });
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
    if (!project1Focused) {
      $('#project1Title').show();
    }
}, function() {
    $(this).css({
      'background-color':'white',
      'opacity':1,
      'cursor':'default'
    });
    $('#project1Title').hide();
});
