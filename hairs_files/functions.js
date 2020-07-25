jQuery(document).ready(function($){

	/**
	 * ページ共通
	 */
	// 記事一覧
	if ( $(".article03").length ) {
		$("#infinitescroll").on({
			"mouseenter": function() {
				var anchor = $(this).find("a");
				var permalink = anchor.attr("href");
				$(".article03-category-item", this).hover(function() {
					anchor.attr("href", $(this).data("url"));
				}, function() {
					anchor.attr("href", permalink);
				});
			},
			"mouseleave": function() {},
		}, ".article03");
		$(".article03").hover(function() {
			var anchor = $(this).find("a");
			var permalink = anchor.attr("href");
			$(".article03-category-item", this).hover(function() {
				anchor.attr("href", $(this).data("url"));
			}, function() {
				anchor.attr("href", permalink);
			});
		});
		/*
		if ( $(window).width() > 991 ) {
			$(".article03-title").autoHeight({column:4});
		} else if ( $(window).width() > 767 ) {
			$(".article03-title").autoHeight({column:3});
		} else {
			$(".article03-title").autoHeight({column:2});
		}*/
	}
	if ( $(".article05").length ) {
		$("#infinitescroll").on({
			"mouseenter": function() {
				var anchor = $(this).find("a");
				var permalink = anchor.attr("href");
				$(".article05-category-item", this).hover(function() {
					anchor.attr("href", $(this).data("url"));
				}, function() {
					anchor.attr("href", permalink);
				});
			},
			"mouseleave": function() {},
		}, ".article05");
		/*
		if ( $(window).width() > 991 ) {
			$(".article05-title").autoHeight({column:4});
		} else if ( $(window).width() > 767 ) {
			$(".article05-title").autoHeight({column:3});
		} else {
			$(".article05-title").autoHeight({column:2});
		}*/
	}
	if ( $(".article06").length ) {
		$(".article06").each(function() {
			var anchor = $(this).find("a");
			var permalink = anchor.attr("href");
			$(".article06-category-item", this).each(function() {
				$(this).hover(function() {
					anchor.attr("href", $(this).data("url"));
				}, function() {
					anchor.attr("href", permalink);
				});
			});
		});
	}
	/*
	$(window).resize(function() {
		if ( $(".article03").length ) {
			storyAutoHeight(".article03-title");
		}
		if ( $(".article05").length ) {
			storyAutoHeight(".article05-title");
		}
	});
	*/

	// ページトップ
	var pagetop = $("#pagetop");  
    pagetop.hide().click(function() {
		$("body, html").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn("slow");
        } else {
            pagetop.fadeOut();
        }   
    }); 

	/**
	 * ギャラリーページ
	 */
	$(".gallery01").slick({
		asNavFor: ".gallery02",
		focusOnSelect: true,
		infinite: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		slidesToScroll: 1,
		slidesToShow: 9,
		responsive: [
    		{
     			breakpoint: 1200,
      			settings: {
        			slidesToShow: 8
      			}
    		},
    		{
     			breakpoint: 992,
      			settings: {
        			slidesToShow: 7
      			}
    		},
    		{
     			breakpoint: 768,
      			settings: {
        			slidesToShow: 3
      			}
    		}
  		]
	});
	$(".gallery02").slick({
		asNavFor: ".gallery01",
		infinite: true,
		slidesToShow: 1,
		responsive: [
    		{
     			breakpoint: 768,
      			settings: {
					arrows: false
      			}
    		}
  		]
	});

	/**
	 * トップページ
	 */
	// スクロール
	$("#top-slider-content a").click(function() {
		var href = $(this).attr("href");
		if ( $(".header-bar-fixed").length ) {
			$("html, body").animate({  
				scrollTop: $(href).offset().top - $(".header-bar").height()
			}, 1000);
		} else {
			$("html, body").animate({  
				scrollTop: $(href).offset().top
			}, 1000);
		} 
		return false;
	});

	// フェードイン
	$(".fade01").on("inview", function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass("fade02");
		}
	});
	
	/**
	 * ブログページ
	 */
  	$("#trackback_switch").click(function(){
    	$("#comment_switch").removeClass("comment_switch_active");
    	$(this).addClass("comment_switch_active");
    	$("#comment_area").animate({opacity: 'hide'}, 0);
    	$("#trackback_area").animate({opacity: 'show'}, 1000);
    	return false;
  	});
  	$("#comment_switch").click(function(){
    	$("#trackback_switch").removeClass("comment_switch_active");
    	$(this).addClass("comment_switch_active");
    	$("#trackback_area").animate({opacity: 'hide'}, 0);
    	$("#comment_area").animate({opacity: 'show'}, 1000);
    	return false;
 	});

});
