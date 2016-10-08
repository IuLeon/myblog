/**
 * Created by Lenovo on 2016/8/9.
 */
//two小明  js
$(function(){
    //图片切换效果开始（类似于轮播图）；
    //动态添加克隆的li
//            $("#bigpic>li:eq(0)").clone(true).appendTo($("#bigpic"));
    //绑定点击事件
    $(".left>ul>li").click(function(){
        var index=$(this).index();
//                var imgWidth=$("#bigpic>li").width();
//                var move=imgWidth*index;
//                if(move>-5720){
//                    $("#bigpic").animate({"left":-move},600);
//                }else{
//                    $("#bigpic").css("left",0);
//                }
        $(this).addClass("current").siblings("li").removeClass("current");
        $("#bigpic>li:eq("+index+")").fadeIn(1000).siblings("li").fadeOut(1000);
        //无法实现轮播效果 就让他们重合在一起 实现需要的显示，不需要的隐藏
    });
    //创建一个定时器，使他们能够自动切换图片
    var index=0;
    setInterval(function(){
        $("#bigpic>li:eq("+index+")").fadeIn(1000).siblings("li").fadeOut(1000);
        $(".left>ul>li:eq("+index+")").addClass("current").siblings("li").removeClass("current");
        if(index<3){
            index++;
        }else{
            index=0;
        }
    },1800);
    //图片切换结束（类似与轮播图）；
    //鼠标进入下拉框事件
    $(".nav>ul>li").mouseenter(function(){
        $(this).children("ul").stop().slideDown(600);
    }).mouseleave(function(){
        $(this).children("ul").stop().slideUp(600);
    });
})
