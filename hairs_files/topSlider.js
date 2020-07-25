jQuery(function($){
	var topSlider = $("#top-slider");
	var topSliderItem = $(".top-slider-item", topSlider);
	var topSliderNav = $("#top-slider-nav");
	var index = $(".active", topSliderNav).index();
	var speed = 1000;
	var sliderNum = topSliderItem.length;
	topSliderItem.first().addClass("active");	
	var timer = setInterval(function() {
		index = (index + 1) % sliderNum;
		$(".active", topSlider).fadeOut(speed).removeClass("active")
		$(".top-slider-item", topSlider).eq(index).fadeIn(speed).addClass("active");
		$(".active", topSliderNav).removeClass("active");
		$("li", topSliderNav).eq(index).addClass("active");
	}, 8000);
	$("a", topSliderNav).click(function() {
		clearInterval(timer);
		index = $("a", topSliderNav).index(this);
		if (!$(this).parent("li").hasClass("active")) {
			$(".active", topSlider).fadeOut(speed).removeClass("active");
			$($(this).attr("href")).fadeIn(speed).addClass("active");
			$(".active", topSliderNav).removeClass("active");
			$(this).parent("li").addClass("active");
			timer = setInterval(function() {
				index = (index + 1) % sliderNum;
				$(".active", topSlider).fadeOut(speed).removeClass("active");
				$(".top-slider-item", topSlider).eq(index).fadeIn(speed).addClass("active");
				$(".active", topSliderNav).removeClass("active");
				$("li", topSliderNav).eq(index).addClass("active"); 
			}, 8000);
		}
		return false;
	});
});
