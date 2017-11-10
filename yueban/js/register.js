/**
 * Created by Mary on 2017/9/13.
 */
$(function(){
    var ok1 = false;
    var ok2 = false;
    var ok3 = false;
    var ok4 = false;
    var ok5 = false;
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
        }
    });

    //验证验证码输入是否一致
    //设置验证码可能出现的内容 0-9、a-z、A-Z
    var str = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
    //将字符串分割成数组
    var arr = str.split(",");
    var len = arr.length;

    $(".hq").click(function() {
        //声明一个str1用来存放验证码
        var str1 = "";
        //生成一个长度为4的验证码
        for (var i = 0; i < 4; i++) {
            var s = parseInt(Math.random() * len);
            var s1 = arr[s];
            str1 += s1;
        }
        $(this).val(str1);
    });

    $(".code").blur(function(){
        var $code = $(".code").val();
        var str1 = $(".hq").val();
        if($code == str1){
            $(this).css("border","1px solid green");
            ok2=true;
        }else{
            $(this).css("border","1px solid red");
        }
    });


    //验证密码
    $(".pwd").blur(function(){
        var $pwd = $(".pwd").val();
        var reg = /^\S{6,12}$/;
        if(reg.test($pwd)){
            $(this).css("border","1px solid green");
            ok3=true;
        }else{
            $(this).css("border","1px solid red");
        }
    });
    //确认密码
    $(".pwdA").blur(function(){
        var $pwdA = $(this).val();
        var $pwd = $(".pwd").val();
        if($pwdA==$pwd){
            $(this).css("border","1px solid green");
            ok4=true;
        }else{
            $(this).css("border","1px solid red");
        }
    });
    //是否勾选
    $(".checked").click(function(){
        if($(".checked").attr("checked")){
            ok5=true;
        }
    });
     $(".btn").click(function(){
     	if(ok1&&ok2&&ok3&&ok4){
 			$.get("http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID="+$(".phone").val()+"&password="+$(".pwd").val(),function(res,status,xhr){
	    		if(status == "success"){
	    			if(res==0){
	    				alert("用户已经存在，请重新输入");
	    			}else if(res==1){
	    				window.location.href = "login.html";
	    			}else if(res==2){
	    				alert("服务器出错");
	    			}
	    		}
	    	});
     	}else{
     		alert("请输入内容");
     	}
    });
  
    //		回顶部
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
