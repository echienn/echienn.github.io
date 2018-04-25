$(document).ready(function()  {
	$(".video-text").fadeIn();
	$(".specific-places").fadeIn();
	$(".diary").fadeIn();
	$("#about-content").fadeIn();
	$("#resume").fadeIn();
	$("#home-body").fadeIn("fast");

	// jQuery Function Number #1
	$(".experience-box").hover( function(){
		// jQuery Function Number #2
		if ($(this).attr("id") == "q-box"){
			// jQuery Function Number #3
			if ($("#q-blurb").hasClass("hidden")) {
				// jQuery Function Number #4
		        $("#q-blurb").slideDown(1000);
		        // jQuery Function Number #5
		        $("#q-blurb").removeClass("hidden");
		       // jQuery Function Number #6
		        $("#q-blurb").addClass("active");
  			}
  		}
  		if ($(this).attr("id") == "data-box"){
			if ($("#data-blurb").hasClass("hidden")) {
		        $("#data-blurb").slideDown(1000);
		        $("#data-blurb").removeClass("hidden");
		        $("#data-blurb").addClass("active");
  			}
  		}
  		if ($(this).attr("id") == "nasa-box"){
			if ($("#nasa-blurb").hasClass("hidden")) {
		        $("#nasa-blurb").slideDown(1000);
		        $("#nasa-blurb").removeClass("hidden");
		        $("#nasa-blurb").addClass("active");
  			}
  		}
  	}, function () {
  			if ($(".blurb").hasClass("active")) {
		        $(".blurb").slideUp(1000);
		        $(".blurb").removeClass("active");
		        $(".blurb").addClass("hidden");
  			}
  		});


	

});
