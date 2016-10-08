/**
 * Created by Lenovo on 2016/8/9.
 */


//Ðý×ªÄ¾Âí¿ªÊ¼
var config = [
    {
        width: 300,
        top: 30,
        left:380,
        opacity: 0.5,
        zIndex: 1
    },//-5
    {
        width: 325,
        top: 100,
        left: 280,
        opacity: 0.6,
        zIndex: 2
    },//-4
    {
        width: 350,
        top: 170,
        left: 155,
        opacity: 0.7,
        zIndex:3
    },//-3
    {
        width: 375,
        top: 230,
        left: 230,
        opacity: 0.8,
        zIndex: 4
    },//-2
    {
        width: 400,
        top: 310,
        left: 280,
        opacity: 0.9,
        zIndex: 5
    },//-1
    {
        width: 425,
        top: 380,
        left: 492.5,
        opacity:1,
        zIndex: 6
    },//0
    {
        width: 400,
        top: 310,
        left:730,
        opacity: 0.9,
        zIndex: 5
    },//1
    {
        width:375,
        top: 240,
        left:805,
        opacity: 0.8,
        zIndex:4
    },//2
    {
        width:350,
        top: 170,
        left:905,
        opacity: 0.7,
        zIndex:3
    },//3
    {
        width: 325,
        top: 100,
        left:805,
        opacity: 0.6,
        zIndex: 2
    },//4
    {
        width: 300,
        top: 30,
        left:730,
        opacity: 0.5,
        zIndex: 1
    },//5
];
window.onload=function () {
    //Ò³ÃæËùÓÐµÄÄÚÈÝ¼ÓÔÚÍêÖ®ºó
    //Êó±êÒÆ¶¯µ½²ãÉÏÏÔÊ¾×óÓÒ½¹µãµÄ²ã
    // ¼ú¼úµÄÏÔÊ¾³öÀ´my$("arrow");
    //»ñÈ¡wrap²ã.×¢²áÊó±ê½øÈëºÍÀë¿ªµÄÊÂ¼þ
    my$("wrap").onmouseover=function () {
        animate(my$("arrow"),{"opacity":1});
    };
    //Êó±êÀë¿ª
    my$("wrap").onmouseout=function () {
        animate(my$("arrow"),{"opacity":0});
    };
    //ÕÒËùÓÐµÄli,ÉèÖÃÃ¿¸öliµÄÎ»ÖÃ,¿í,top,Í¸Ã÷¶È.....
    //»ñÈ¡ËùÓÐµÄli
    var lis=my$("slide").children[0].children;

    var flag=true;//¼ÙÉèÖ´ÐÐÍêÁË
    function assgin() {
        for(var i=0;i<lis.length;i++){
            animate(lis[i],config[i],function () {
                flag=true;
            });
        }
    };
    assgin();//Ò³Ãæ¼ÓÔØºóÒªµ÷ÓÃ¸Ãº¯Êý
    //»ñÈ¡ÓÒ±ß°´Å¥
    my$("arrRight").onclick=function () {
        if(flag){
            flag =false;
            //¸Ä±äÊý×éÖÐµÚÒ»¸öÔªËØºÍ×îºóÒ»¸öÔªËØµÄÎ»ÖÃ
            config.push(config.shift());
            assgin();//Ë¢ÐÂÒ»ÏÂ
        }
    };
    //»ñÈ¡×ó±ß°´Å¥
    my$("arrLeft").onclick=function () {
        if(flag){
            flag=false;
            config.unshift(config.pop());
            assgin();
        }
    };
};
//¸ÃÖÖÐ´·¨ÔÚbodyÖ®Ç°£¬Òª¼ÓÉÏonloadÊôÐÔ²Å¿ÉÒÔ
window.onload=function(){
    //Ë¢ÐÂÒ³Ãæ£¬»ñÈ¡li±êÇ©£¬ÎªËùÓÐli±êÇ©Ìí¼ÓÑùÊ½
    var flag=true;

    var lis=document.getElementById("slide").children[0].children;
    function assign(){
        for(var i=0;i<lis.length;i++){
            animate(lis[i],config[i],function(){
                flag=true;
            });
        }
    };
    assign();
    //»ñÈ¡wrap±êÇ©£¬ÓÃÓÚÊó±ê½øÈëÊÂ¼þºÍÀë¿ªÊÂ¼þ
    my$("wrap").onmouseover=function(){
        animate(my$("arrow"),{"opacity":1})
    };
    my$("wrap").onmouseout=function(){
        animate(my$("arrow"),{"opacity":0})
    };
    //Îª arrLeft×¢²áµã»÷ÊÂ¼þ
    my$("arrLeft").onclick=function(){
        if(flag){
            config.unshift(config.pop());
            flag=false;
            assign();
        }
    }
    //Îª arrRight×¢²áµã»÷ÊÂ¼þ
    my$("arrRight").onclick=function(){
        if(flag) {
            config.push(config.shift());
            flag = false;
            assign();
        }
    }
};
/*ÂÖ²¥Í¼ÏÂ±ßÖ÷Ìå²¿·Ö¿ªÊ¼*/
$(function(){
//            var bigbody=document.getElementById("fivebigbody");
//            bigbody.onclick=function () {
//                animate(bigbody,{"opacity":0.8},function () {
//                    animate(bigbody,{"opacity":0.6},function () {
//                        animate(bigbody,{"opacity":0.4});
//                    });
//                });
//            };
$(".fivebigbodyone").click(function(){
    $(this).animate({"top":-1080},1300, function () {
        $(".fivebigbodytwo").animate({"left": -1920},1300, function () {
            $(".fivebigbodythree").animate({"bottom":-1080}, 1300, function () {
                $(".fivebigbodyfour").animate({"right": -1920}, 1300, function () {
                    $(".fivebigbodyfive").animate({"top":-1080}, 1300, function () {
                        $(".fivebigbodysix").animate({"left":-1920}, 1300, function () {
                            $(".fivebigbodyseven").animate({"bottom":-1080}, 1300, function () {
                                $(".fivebigbodyeight").animate({"opacity":0}, 1500, function () {
                                    $(".fivebigbodyeight").animate({"top":-1080}, 0, function () {
                                        $(".fivebigbodynine").animate({"bottom": 0}, 1500, function () {
                                            $(".fivebigbodynine").animate({"right": -1920}, 1300, function () {
                                                $(".fivebigbodyten").animate({"top": 0}, 1500, function () {
                                                    $(".fivebigbodyten").animate({"left": -1920}, 1300, function () {
                                                        $(".fivebigbodyeleven").animate({"left": 0}, 1500, function () {
                                                            $(".fivebigbodyeleven").animate({"left": 1920},1300, function () {//12
                                                                $(".fivebigbodytwelve").animate({"right": 0}, 1500, function () {
                                                                    $(".fivebigbodytwelve").animate({"right": 1920}, 1300, function () {
                                                                        $(".fivebigbodythirteen").animate({"left": 0}, 500, function () {//13
                                                                            $(".fivebigbodythirteen").animate({"left": 400}, 500, function () {
                                                                                $(".fivebigbodythirteen").animate({"left": 0}, 400, function () {
                                                                                    $(".fivebigbodythirteen").animate({"left": 200}, 400, function () {
                                                                                        $(".fivebigbodythirteen").animate({"left": 0}, 300, function () {
                                                                                            $(".fivebigbodythirteen").animate({"left": 100}, 300, function () {
                                                                                                $(".fivebigbodythirteen").animate({"left": 0}, 200, function () {
                                                                                                    $(".fivebigbodythirteen").animate({"left": 60}, 200, function () {
                                                                                                        $(".fivebigbodythirteen").animate({"left": 0}, 150, function () {
                                                                                                            $(".fivebigbodythirteen").animate({"left": 30}, 100, function () {
                                                                                                                $(".fivebigbodythirteen").animate({"left": 0}, 200, function () {
                                                                                                                    $(".fivebigbodyfourteen").animate({"top": 600}, 600, function () {//14
                                                                                                                        $(".fivebigbodyfourteen").animate({"top": 0}, 400, function () {
                                                                                                                            $(".fivebigbodyfourteen").animate({"top": 400}, 400, function () {
                                                                                                                                $(".fivebigbodyfourteen").animate({"top": 0}, 400, function () {
                                                                                                                                    $(".fivebigbodyfourteen").animate({"top": 200}, 400, function () {
                                                                                                                                        $(".fivebigbodyfourteen").animate({"top": 0}, 300, function () {
                                                                                                                                            $(".fivebigbodyfourteen").animate({"top": 100}, 300, function () {
                                                                                                                                                $(".fivebigbodyfourteen").animate({"top": 0}, 200, function () {
                                                                                                                                                    $(".fivebigbodyfourteen").animate({"top": 60}, 200, function () {
                                                                                                                                                        $(".fivebigbodyfourteen").animate({"top": 0}, 150, function () {
                                                                                                                                                            $(".fivebigbodyfourteen").animate({"top": 30}, 100, function () {
                                                                                                                                                                $(".fivebigbodyfourteen").animate({"top": 0}, 200, function () {
    $(".fivebigbodyfifteen").animate({"bottom": 600}, 600, function () {//15
       $(".fivebigbodyfifteen").animate({"bottom": 0}, 400, function () {
           $(".fivebigbodyfifteen").animate({"bottom": 400}, 400, function () {
               $(".fivebigbodyfifteen").animate({"bottom": 0}, 400, function () {
                   $(".fivebigbodyfifteen").animate({"bottom": 200}, 400, function () {
                       $(".fivebigbodyfifteen").animate({"bottom": 0}, 300, function () {
                           $(".fivebigbodyfifteen").animate({"bottom": 100}, 300, function () {
                               $(".fivebigbodyfifteen").animate({"bottom": 0}, 200, function () {
                                   $(".fivebigbodyfifteen").animate({"bottom": 60}, 200, function () {
                                       $(".fivebigbodyfifteen").animate({"bottom": 0}, 150, function () {
                                           $(".fivebigbodyfifteen").animate({"bottom": 30}, 100, function () {
                                               $(".fivebigbodyfifteen").animate({"bottom": 0}, 200, function () {
$(".fivebigbodysixteen").animate({"left": 1830}, 600, function () {//16
    $(".fivebigbodysixteen").animate({"left": 1130}, 400, function () {
        $(".fivebigbodysixteen").animate({"left": 1630}, 400, function () {
            $(".fivebigbodysixteen").animate({"left": 1130}, 400, function () {
                $(".fivebigbodysixteen").animate({"left":1430}, 400, function () {
                    $(".fivebigbodysixteen").animate({"left": 1130}, 300, function () {
                        $(".fivebigbodysixteen").animate({"left": 1230}, 300, function () {
                            $(".fivebigbodysixteen").animate({"left": 1130}, 200, function () {
                                $(".fivebigbodysixteen").animate({"left": 1190}, 200, function () {
                                    $(".fivebigbodysixteen").animate({"left": 1130}, 150, function () {
                                        $(".fivebigbodysixteen").animate({"left": 1160}, 100, function () {
                                            $(".fivebigbodysixteen").animate({"left": 1130}, 200, function () {
$(".fivebigbodyseventeen").animate({"right": 0}, 600, function () {//17
    $(".fivebigbodythirteen").animate({"left": -524}, 400, function () {//13ÏûÊ§
        $(".fivebigbodyfourteen").animate({"top": -1080}, 400, function () {//14ÏûÊ§
            $(".fivebigbodyfifteen").animate({"bottom": -1080}, 400, function () {//15ÏûÊ§
                $(".fivebigbodysixteen").animate({"left": -268}, 400, function () {//16ÏûÊ§
                    $(".fivebigbodyseventeen").animate({"right": -522}, 400, function () {//17ÏûÊ§
                        $(".fivebigbodyeighteen").animate({"width": 1920,"height":1080}, 1500, function () {//18
                            $(".fivebigbodyeighteen").animate({"width": 0,"height":0}, 1100, function () {//18ÏûÊ§
$(".fivebigbodynineteen").animate({"width": 1920,"height":1080},1500, function () {//19
    $(".fivebigbodynineteen").animate({"width": 0,"height":0}, 1000, function () {//19
        $(".fivebigbodytwenty").animate({"width": 1920,"height":1080,"left":0,"top":0}, 1100, function () {//20
            $(".fivebigbodytwenty").animate({"top":-1080}, 800, function () {//20ÏûÊ§
                $(".fivebigbodytwentyone").animate({"opacity":1}, 2000, function () {//21
                    $(".fivebigbodytwentyone").animate({"width": 0,"height":0,"left":960,"top":540}, 1500, function () {//21ÏûÊ§
                        $(".fivebigbodytwentytwo").animate({"width": 1920,"height":1080,"left":0,"top":0}, 1500, function () {//22
                            $(".fivebigbodytwentytwo").animate({"width": 0,"height":0,"left":0,"top":540}, 1500, function () {//22ÏûÊ§
                                $(".fivebigbodytwentythree").animate({"opacity":0}, 3000, function () {//23Í¸Ã÷
                                    $(".fivebigbodytwentythree").animate({"top":-1080}, 0, function () {//23Í¸Ã÷
                                        $(".five-beautiful-imgs").remove();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
                            });
                        });
                    });
                });
            });
        });
    });
});
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
                                               });
                                           });
                                       });
                                   });
                               });
                           });
                       });
                   });
               });
           });
       });
    });
                                                                                                                                                                });
                                                                                                                                                            });
                                                                                                                                                        });
                                                                                                                                                    });
                                                                                                                                                });
                                                                                                                                            });
                                                                                                                                        });
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            });
                                                                                                                        });
                                                                                                                    });
                                                                                                                });
                                                                                                            });
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });//
                });//
            });//
        });//
    });//
});//.fivebigbody
    $(".five-photo-show-left-top").mouseenter(function(){
        $(this).children("div").stop().animate({left:0}, 800);
    }).mouseleave(function(){
        $(this).children("div").stop().animate({left:264}, 500);
    });
    $(".five-photo-show-left-buttom").mouseenter(function(){
        $(this).children("div").stop().animate({left:0}, 800);
    }).mouseleave(function(){
        $(this).children("div").stop().animate({left:264}, 500);
    });
    $(".five-photo-show-center").mouseenter(function(){
        $(this).children("div").stop().animate({top:0}, 800);
    }).mouseleave(function(){
        $(this).children("div").stop().animate({top:730}, 500);
    });
    $(".five-photo-show-right-top").mouseenter(function(){
        $(this).children("div").stop().animate({left:0}, 800);
    }).mouseleave(function(){
        $(this).children("div").stop().animate({left:-264}, 500);
    });
    $(".five-photo-show-right-buttom").mouseenter(function(){
        $(this).children("div").stop().animate({left:0}, 800);
    }).mouseleave(function(){
        $(this).children("div").stop().animate({left:-264}, 500);
    });
});
$(document).ready(function () {
    $('#bg_music').append('<audio id="m_bg_music" loop="loop" preload="auto" autoplay="autoplay" src="mp3/today.mp3"/>');
    var mp3=$('#m_bg_music')[0];

    $('#bg_music_btn').click(function(){
        var num = $('#bg_music_btn').attr('num');
        if(num == "1")
        {
            $('#bg_music_btn').attr('num','0');
            mp3.pause();
        }
        if(num == "0")
        {
            $('#bg_music_btn').attr('num','1');
            mp3.play();
        }
    });
});