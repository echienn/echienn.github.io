$(document).ready(function()  {
	$(".video-text").fadeIn();
	$(".specific-places").fadeIn();
	$(".diary").fadeIn();
	$("#about-content").fadeIn();
	$("#resume").fadeIn();
	$("#home-body").fadeIn("fast");

	$(".experience-box").hover( function() {
		if ($(this).attr("id") == "q-box"){
			if ($("#q-blurb").hasClass("hidden")) {
		        $("#q-blurb").slideDown(1000);
		        $("#q-blurb").removeClass("hidden");
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
