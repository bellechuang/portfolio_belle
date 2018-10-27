$("#sendEmail").click(function() {

  //save first name
  var firstName = $("#firstName").val();
  var email = $("#email").val();
  var message = $("#message").val();

  //if user enters first name, email, and message
    //show message has been sent 
  //if any input is missing
    //show input needs to be completed message

    if (firstName && email && message) {

      //set HTML of .modal-body
      $(".modal-body").html("Yay, " + firstName + "! Your message has been sent!");

        //clear all fields in form
      $(".form-control").val("");
      
    } else {
      //set HTML of .modal-body
      $(".modal-body").html("Please fill in all inputs");
    }

});

$("#contactbutton").click(function() {
  $(this).find('i').toggleClass('fas fa-times far fa-envelope')
});

$(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});
