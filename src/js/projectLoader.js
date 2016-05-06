var project1Focused = false;
var project2Focused = false;

// grows and shrinks project 1
$('#project1').on('click', function(event) {
  event.preventDefault();
  if (project1Focused === false) {
    project1Focused = true;
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
    $('#specifics1').show(500);
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
  // TODO: NEED TO FIX THE RESIZING OPTION FOR THE SECOND ONE
  if (project2Focused === false) {
    project2Focused = true;
    $('#project1').animate({
      height:'0px',
      width:'0px'
    }, function() {
      $('#project1').hide();
    });

    $('#project2').animate({
      height:'500px',
      width:'900px'
    });
  } else {
    project2Focused = false;

    $('#project1').animate({
      height:'300px',
      width:'450px'
    });

    $('#project2').animate({
      height:'300px',
      width: '450px'
    });
    $('#project1').show();
  }


});
