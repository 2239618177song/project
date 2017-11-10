/**
 * Created by Mary on 2017/9/13.
 */
$(function(){
    var ok1 = false;
    var ok2 = false;

    //验证手机号
    $(".phone").blur(function(){
        var reg = /^1\d{10}$/;
        var $phone = $(".phone").val();
        if(reg.test($phone)){
            $(this).css("border","1px solid green");
            ok1=true;
        }else{
            $(this).css("border","1px solid red");
            $(this).attr({"placeholder":"格式不正确"});
//          return false;
        }
    });
    //验证密码
    $(".pwd").blur(function(){
        var $pwd = $(".pwd").val();
        var reg = /^\S{6,12}$/;
        if(reg.test($pwd)){
            $(this).css("border","1px solid green");
            ok2=true;
        }else{
            $(this).css("border","1px solid red");
            $(this).attr({"placeholder":"密码错误"});
//          return false;
        }
    });
    $(".btn").click(function(){
    	if(ok1&&ok2){
			$.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID="+$(".phone").val()+"&password="+$(".pwd").val(),function(res,status,xhr){
	    		if(status=="success"){
	    			if(res==0){
	    				alert("用户不存在，请注册");
	    			}else if(res==2){
	    				alert("用户名或密码错误");
	    			}else{
	    				window.location.href = "index.html";
	    			}
	    		}
	    	});
    	}else{
     		alert("请输入内容");
     	}
    });

    //回顶部
    var $oT = $(".nav").offset().top;//导航条的上部偏移量
    $(window).scroll(function(){
        var $wH = $(this).scrollTop();//浏览器滚动的高度
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