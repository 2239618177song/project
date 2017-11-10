$(function(){
	// 轮播部分
	var n = 1;
	var interId;
	function banner(){
		interId = setInterval(function(){
			$(".slider").stop(true,false).animate({"margin-left":"-100%"},1000,function(){
				n++;
				if(n>6){
					n = 1;
				}
				$(this).css("margin-left",0);
				$(".slider a").first().appendTo($(".slider"));
				$(".index").html(n);
			});

		},2000);
	}
	banner();
	$(".slider").mouseenter(function(){
		clearInterval(interId);
	}).mouseleave(function(){
		banner();
	});
	
	
//	约游部分
	$(".c_slider a").mouseenter(function(){
		$(this).find(".d").css({"color":"#000","font-size":"14px"}).siblings().css({"color":"","font-size":""});
		$(this).find(".bann").css("border-color","#ffac00").siblings().css("border-color","");
	}).mouseleave(function(){
		$(this).find(".d").css({"color":"","font-size":""});
		$(this).find(".bann").css("border-color",""); 
	});
	
	
//	自由行
	$("a").mouseenter(function(){
		$(this).find("h4").css("color","#ffac00");
	}).mouseleave(function(){
		$(this).find("h4").css("color","");
	});
	
	
//	品牌故事----遮罩层
	$(".main_fir").each(function(){//遍历每个a
		$(this).bind("mouseenter mouseleave",function(ev){
			var offT = $(this).offset().top;//获取当前鼠标放上去的a距离上部的偏移量
			var offL = $(this).offset().left;//获取当前鼠标放上去的a距离左部的偏移量
			var pageX = ev.pageX;//获取鼠标进入a时的坐标
			var pageY = ev.pageY;
			var w = $(this).outerWidth();//获取当前鼠标放上去盒子的宽度
			var h = $(this).outerHeight();
			var direction;  //声明方向的变量
			var k = h / w;  //获取斜率(对角线构成的与x轴正方向的角度的tan值)
			k1 = (pageY - offT - h / 2) / (pageX - offL - w / 2);//鼠标进入盒子时的坐标与原点构成的斜率
			if(k1 >= -k && k1 <= k){   //如果鼠标坐标的斜率在-k 与  k之间，说明鼠标是从盒子左侧或右侧进入的
				if(pageX >= offL + w / 2){  //如果鼠标的x坐标 大于  盒子向上的偏移量加上盒子自身宽度的一半时
					direction = "right";  //  说明鼠标从右侧进入
				}else{
					direction = "left";   //否则鼠标从左侧进入
				}
			}else{  //如果鼠标坐标构成的斜率大于k 或者 小于-k  说明鼠标是从盒子上侧或下侧进入的
				if(pageY >= offT + h / 2){  //如果鼠标的y坐标  大于 盒子向上的偏移量加上自身高度的一半时
					direction = "bottom";  //说明鼠标从底部进入的
				}else{
					direction = "top";    //否则鼠标从底部进入
				}
			}
			
			var this_hidden = $(this).find('.r_hidden');  
		       if(ev.type == 'mouseenter'){ 
		            switch(direction){  
		                case "top":  
		                    this_hidden.css({top:-h,left:"0px"});  
		                        break;  
		                case "right":  
		                    this_hidden.css({top:"0px",left:w});  
		                        break;  
		                case "bottom":  
		                    this_hidden.css({top:h,left:"0px"});  
		                        break;  
		                case "left":  
		                    this_hidden.css({top:"0px",left:-w});  
		                        break;  
		           }
		            this_hidden.stop(true,true).animate({"top":"0px","left":"0px"},500);
		        }else if(ev.type == 'mouseleave'){
		            switch(direction){  
		                case "top" :  
		                    this_hidden.stop(true,true).animate({"top":-h},"fast");  
		                        break;  
		                case "right":  
		                    this_hidden.stop(true,true).animate({"left":w},"fast");  
		                        break;  
		                case "bottom":  
		                    this_hidden.stop(true,true).animate({"top":h},"fast");  
		                        break;  
		                case "left":  
		                    this_hidden.stop(true,true).animate({"left":-w},"fast");  
		                        break;  
		            } 
		       }  
		});
		
	});
	//点击切换
	$(".r_next").click(function(){
		$(".o li").first().appendTo($(".o"));
	});
	$(".r_pre").click(function(){
//		$(".o").stop().animate({"left":"20px"});
		$(".o li").last().prependTo($(".o"));
	});


})


