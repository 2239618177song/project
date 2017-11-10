$(function(){

	$(".photo .btn").click(function(){
		var $con = $("textarea").val();
		if($con==""){
			$(".tishi").fadeIn("fast");
		}else{
			var $url = $(".photo input").val();
			addD();
			$(".m_content .c").html($con);
			$(".pic li.i").html($url);
		}
		$(".cha").click(function(){
			$(".tishi").fadeOut("fast");
		});

	});
	function addD(){
		 var $mD = $("<div class='main'></div>");
		$mD.prependTo($(".container"));
		//上部内容
		var $mT = $("<div class='m_top'></div>");
		$mT.appendTo($mD);
		$("<a href='#'><img src='pic/0dac4dfa1eb6996b1e14d6213f98e6b8.jpg' /></a>").appendTo($mT);
		$("<div class='word'><p class='name'>爱美的洋娃娃</p><span class='date'>09.03</span></div>").appendTo($mT);
		$("<div class='jiantou'></div><div class='j_hidden'>回复</div>").appendTo($mT);

//		中间内容
		var $mC = $("<div class='m_content'></div>");
		$mC.appendTo($mD);
		$("<p class='c'></p>").appendTo($mC);

//		下方图片
		var $pic = $("<div class='pic'></div>");
		$pic.appendTo($mD);
		var $ul = $("<ul class='p_ul'>");
		$ul.appendTo($pic);
		var $li = $("<li class='i'></li>")
		$li.appendTo($ul);
		$("<div class='pre'><img src='images/left.png' /></div><div class='next'><img src='images/right.png' /></div>").appendTo($pic);
	//<li><img src="pic/265f911995696ec8c961d28d9ef1ab24.jpg" alt="" /></li>
		//底部点赞评论
		var $bom = $("<div class='m_bottom'></div>");
		$bom.appendTo($mD);
		$("<div class='zan'><img src='pic/赞.png'/><span>0</span>个赞</div><div class='pinglun'><img src='pic/评论.png' /><span>0</span>个评论</div>").appendTo($bom);

	};
	$(".container .load").bind("click",function(){
		var $len = $(".main").length;
		addD2();
	})
	function addD2(){
		//	创建大盒子
		var $mD = $("<div class='main'></div>")
		$mD.insertBefore($(".load"));
		//上部内容
		var $mT = $("<div class='m_top'></div>");
		$mT.appendTo($mD);
		$("<a href='#'><img src='pic/0dac4dfa1eb6996b1e14d6213f98e6b8.jpg' /></a>").appendTo($mT);
		$("<div class='word'><p class='name'>爱美的洋娃娃</p><span class='date'>09.03</span></div>").appendTo($mT);
		$("<div class='jiantou'></div><div class='j_hidden'>回复</div>").appendTo($mT);

//		中间内容
		var $mC = $("<div class='m_content'></div>");
		$mC.appendTo($mD);
		$("<p class='c'></p>").appendTo($mC);

//		下方图片
		var $pic = $("<div class='pic'></div>");
		$pic.appendTo($mD);
		var $ul = $("<ul class='p_ul'>");
		$ul.appendTo($pic);
		var $li = $("<li class='i'></li>")
		$li.appendTo($ul);
		$("<div class='pre'><img src='images/left.png' /></div><div class='next'><img src='images/right.png' /></div>").appendTo($pic);
		//<li><img src="pic/265f911995696ec8c961d28d9ef1ab24.jpg" alt="" /></li>
		//底部点赞评论
		var $bom = $("<div class='m_bottom'></div>");
		$bom.appendTo($mD);
		$("<div class='zan'><img src='pic/赞.png'/><span>0</span>个赞</div><div class='pinglun'><img src='pic/评论.png' /><span>0</span>个评论</div>").appendTo($bom);

		$(".c").html("最近的天气都不错，可以出去玩了");
		$("li.i").html("<img src='pic/0.png'/>");
	}


	//点击回复
	$(".m_top .jiantou").each(function(i,v){
		$(this).bind("click",function(){
			$(".j_hidden").eq(i).fadeIn();
			$(".jiantou").css("transform","rotate(-135deg)");
		})
	})


	//点赞
	$(".zan").each(function(i,v){
		var $num = 0;//计数
		$(this).bind("click",function(){
			$num++;
			var $count = $(this).children("span").html()*1;
			if($num%2!=0){
				$(this).children("img").attr({"src":"pic/赞 (1).png"});
				$count++;
				$(this).children("span").html($count);
				$(this).children("span").css("color","red");
			}else{
				$(this).children("img").attr({"src":"pic/赞.png"});
				$count--;
				$(this).children("span").html($count);
				$(this).children("span").css("color","black");
			}

		});

	})
});
