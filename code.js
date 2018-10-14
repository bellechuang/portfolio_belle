$("#sendEmail").click(function() {

  //save first name
  var firstName = $("#firstName").val();
  var email = $("#email").val();
  var message = $("#message").val();

  //set HTML of .modal-body
  $(".modal-body").html("Thank you, " + firstName + "! Your message has been sent!");
  //Thank you, First Name. Your message has been sent!

  //clear all fields in form
  $(".form-control").val("");

  //if user enters first name, email, and message
    //show message has been sent 
  //if any input is missing
    //show input needs to be completed message

    if (firstName && email && message) {

      //set HTML of .modal-body
      $(".modal-body").html("Thank you, " + firstName + "! Your message has been sent!");
      
    } else {
      //set HTML of .modal-body
      $(".modal-body").html("Check your inputs!");
    }

});