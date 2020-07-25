jQuery(document).ready(function($){

	/**
	 * グローバルナビゲーション
	 */
	$("#global-nav-button").click(function() {
		$(this).toggleClass("active");
		$(this).next(".global-nav").slideToggle();		
		return false;
	});
	$(".menu-item-has-children > a span").click(function() {
		$(this).closest(".menu-item-has-children").toggleClass("active");
		$(this).parent("a").next(".sub-menu").slideToggle();
		return false;
	});
});
