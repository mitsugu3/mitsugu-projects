jQuery(document).ready(function($){

	/**
	 * スマホ用固定フッターバー
	 */
	if ($(".dp-footer-bar-share").length) {
		$(".dp-footer-bar-share, #modal-overlay").on("click", function() {
			$("#modal-content, #modal-overlay").toggleClass("hide");			
			return false;
		});	
		$("#modal-overlay, #modal-content").on("touchmove", function(e) {
			e.preventDefault();
		});
	}
	if ($(".dp-footer-bar").length) {
		var footerBar02 = $(".dp-footer-bar");  
		$(".footer-bar01").css({
			"padding-bottom": $(".dp-footer-bar").height() + "px"
		});
		$("#pagetop").css({
			"bottom": $(".dp-footer-bar").height() + "px"
		});
  		footerBar02.hide();
  		$(window).scroll(function () {
    		if ($(this).scrollTop() > 100) {
    			footerBar02.fadeIn("slow");
    		} else {
      			footerBar02.fadeOut();
    		}
		}); 
	}
});
