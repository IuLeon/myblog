/**
 * Created by Lenovo on 2016/8/9.
 */
//twoС��  js
$(function(){
    //ͼƬ�л�Ч����ʼ���������ֲ�ͼ����
    //��̬��ӿ�¡��li
//            $("#bigpic>li:eq(0)").clone(true).appendTo($("#bigpic"));
    //�󶨵���¼�
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
        //�޷�ʵ���ֲ�Ч�� ���������غ���һ�� ʵ����Ҫ����ʾ������Ҫ������
    });
    //����һ����ʱ����ʹ�����ܹ��Զ��л�ͼƬ
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
    //ͼƬ�л��������������ֲ�ͼ����
    //�������������¼�
    $(".nav>ul>li").mouseenter(function(){
        $(this).children("ul").stop().slideDown(600);
    }).mouseleave(function(){
        $(this).children("ul").stop().slideUp(600);
    });
})
