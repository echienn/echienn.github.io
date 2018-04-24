$(document).ready(function()  {
	$(".video-text").fadeIn();
	$(".specific-places").fadeIn();
	$(".diary").fadeIn();
	$("#about-content").fadeIn();
	$("#resume").fadeIn();

	$(".experience-box").hover( function() {
		if ($(this).attr("id") == "q-box"){
			if ($("#q-blurb").hasClass("hidden")) {
		        $("#q-blurb").slideDown(1000);
		        $("#q-blurb").removeClass("hidden");
		        $("#q-blurb").addClass("active");
  			}
  		}});


	

});
