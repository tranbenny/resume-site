'use strict';
(function() {

function main() {
  validateForm();
}

function validateForm() {
  $('#sendMessageButton').on('click', function(event) {
    event.preventDefault();

    var validForm = true;

    $('.input-group').each(function(index) {
      if ($(this).attr('id') !== 'message') {
        var input = $(this).find("input");
        var label = $(this).find("span");
      } else {
        var input = $(this).find('textarea');
      }

      // mark invalid fields
      if (input.val() === '') {
        validForm = false;
        if ($(this).attr('id') !== 'message') {
          label.addClass('invalidLabel');
        }
        input.css({'border':'2px solid red'});
        input.attr('placeholder', 'VALID ENTRY IS REQUIRED');
      } else {
      // mark valid fields
        if ($(this).attr('id') !== 'message') {
          label.addClass('validLabel');
        }
        input.css({'border': '2px solid #4cae4c'});
      }
    });
    console.log(validForm);
    if (validForm) {
      var serializedData = $('#form').serialize();
      var request = $.ajax({
        url:'/sendEmail.php',
        type:'post',
        data: serializedData
      });
      request.done(function(response, textStatus, jqXHR) {
        $('#statusGroup').show();
        clearInputs();
      });
    }
  });
}

// resets form fields
function clearInputs() {
    $('.input-group').each(function(index) {
      var input = $(this).find('input');
      if ($(this).attr('id') === 'message') {
        input = $(this).find('textarea');
      }
      input.val('');
    });
}


main();



})();
