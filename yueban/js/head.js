$(function(){
	//	二维码扫描下载
	$(".download li").hover(function(){
		$(this).children("a").css("color","#FFAC00");
		$(this).find("img").stop().slideDown("fast");
	},function(){
		$(this).children("a").css("color","");
		$(this).find("img").stop().slideUp("fast");
	})


//	头部下拉菜单
	$(".n_main li").mouseenter(function(){
		$(this).children("ul").stop().slideDown();
		$(this).addClass("active").siblings().removeClass("active");
	}).mouseleave(function(){
		$(this).children("ul").stop().slideUp();
		$(this).removeClass("active");
	});
	
	//导航条固定定位
	var $oT = $(".nav").offset().top;//导航条的上部偏移量
	$(window).scroll(function(){
		var $wH = $(this).scrollTop();//浏览器滚动的高度
		if($wH >= $oT){
			$(".nav").css({"position":"fixed","top":0,"left":0});
		}else if($wH <=90){
			$(".nav").css({"position":"absolute"});
		}
//		回顶部
		if($wH>600){
			$(".goTop").stop().fadeIn();
			$(".goTop").click(function(){
				$("html,body").stop().animate({"scrollTop":0},1000);
			});
		}else{
			$(".goTop").stop().fadeOut("fast");
		}
	});
	
});





	