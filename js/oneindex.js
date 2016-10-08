/**
 * Created by Administrator on 2016/8/9 0009.
 */
$(function () {
//       网页腹部，风尚堂摄影客片欣赏

    $(".one-left div").mouseenter(function () {
        var index=$(this).index();
        $(".one-left div span").eq(index).stop().animate({"bottom":67},500);
    });
    $(".one-left div").mouseleave(function () {
        var index=$(this).index();
        $(".one-left div span").eq(index).stop().animate({"bottom":-60},500);
    });

    $(".one-center div").mouseenter(function () {
        var index=$(this).index();
        $(".one-center div span").eq(index).stop().animate({"bottom":67},500);
    });
    $(".one-center div").mouseleave(function () {
        var index=$(this).index();
        $(".one-center div span").eq(index).stop().animate({"bottom":-60},500);
    });
    $(".one-right div").mouseenter(function () {
        var index=$(this).index();
        $(".one-right div span").eq(index).stop().animate({"bottom":67},500);
    });
    $(".one-right div").mouseleave(function () {
        var index=$(this).index();
        $(".one-right div span").eq(index).stop().animate({"bottom":-60},500);
    });




    $(".one-left div").mouseenter(function () {
        var index=$(this).index();
        $(".one-left div i").eq(index).stop().animate({"top":67},500);
    });
    $(".one-left div").mouseleave(function () {
        var index=$(this).index();
        $(".one-left div i").eq(index).stop().animate({"top":-60},500);
    });
    $(".one-center div").mouseenter(function () {
        var index=$(this).index();
        $(".one-center div i").eq(index).stop().animate({"top":67},500);
    });
    $(".one-center div").mouseleave(function () {
        var index=$(this).index();
        $(".one-center div i").eq(index).stop().animate({"top":-60},500);
    });
    $(".one-right div").mouseenter(function () {
        var index=$(this).index();
        $(".one-right div i").eq(index).stop().animate({"top":67},500);
    });
    $(".one-right div").mouseleave(function () {
        var index=$(this).index();
        $(".one-right div i").eq(index).stop().animate({"top":-60},500);
    });




//       网页臀部,最美的季节
    $(".onepic li img").mouseover(function() {
        $(this).fadeTo(1);
        $(this).parent().siblings("li").children("img").stop().fadeTo(500,0.3);
    }).mouseout(function () {
        $(this).parent().siblings("li").children("img").stop().fadeTo(500,1);
    });
});
