/**
 * Created by Mary on 2017/9/13.
 */
$(function(){
    //日期切换
    var $tableW = $("table").outerWidth();
    var $len = $(".tab_date table").length;
    var $width = $len * $tableW;
    $(".tab_date").css("width",$width);
    $(".tab .tab_fir").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var $index = $(this).index();
        //alert($index);
        $(".tab_date").stop().animate({"left":-$index*$tableW},800);
    });


    //计算价格
    var $price1 = $(".price1").html();//获取成人票价
    var $price2 = $(".price2").html();//获取儿童票价
    var $tol = $(".tol").html()*1;
    //改变成人数
    $(".sub1").click(function(){
        var $num1 = $(".num1").val();
        if($num1<=0){
            $num1 = 0;
        }else{
            $num1--;
            $(".num1").val($num1);
            $tol =$tol + $num1 * $price1;
            $(".tol").html($tol);
        }
    })
    $(".add1").click(function(){
        var $num1 = $(".num1").val();
        $num1++;
        $(".num1").val($num1);
        $tol = $num1 * $price1;
        $(".tol").html($tol);
    })
    $(".sub2").click(function(){
        var $num1 = $(".num1").val();
        $(".num1").val($num1);
        $tol = $num1 * $price1;
        var $num2 = $(".num2").val();
        if($num2<=0){
            $num2=0;
        }else{
            $num2--;
            $(".num2").val($num2);
            $tol =$tol + $num2 * $price2;
            $(".tol").html($tol);
        }
    })
    $(".add2").click(function(){
        var $num1 = $(".num1").val();
        $(".num1").val($num1);
        $tol = $num1 * $price1;
        var $num2 = $(".num2").val();
        $num2++;
        $(".num2").val($num2);
        $tol =$tol + $num2 * $price2;
        $(".tol").html($tol);
    });


    //楼层效果
    //时间部分的偏移量
    var $dT = $(".dr_bottom").offset().top;
    //导航部分的偏移量
    var $dlT = $(".dlb_nav").offset().top;
    var $nn = $(".nav_next").offset().top;
    var $nn = $(".nav_next").outerHeight();
    $(window).scroll(function(){
        //获得当前浏览器的滚动高度
        var $wT = $(window).scrollTop();
        if($wT>=$dlT-160) {
            $(".dlb_nav").css({"position": "fixed", "top": "100px"});
        }else if($dlT<=540){
            $(".dlb_nav").css({"position": ""});
        }
        $(".dlb_nav li").click(function(){
            var $index = $(this).index();
            $(this).addClass("dl_active").siblings().removeClass("dl_active");
            var $h = $(".nav_next h3").eq($index).offset().top;
            $("body").stop().animate({"scrollTop":$h-210},1000);
        })

        $(".nav_next h3").each(function(index,value){
            var $hT = $(value).offset().top;
            if($wT>$hT-230){
                $(".dlb_nav li").eq(index).addClass("dl_active").siblings().removeClass("dl_active");
            }
        })
    })


});