$(function(){
    var index=0;//标记当前图片索引
    var f;
    dingshiqi();
    function dingshiqi(){
        f=setInterval(function(){
        if (index==$(".bannar img").length-1) {
            index=0;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
        }else{
            index++;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1"); 
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
        }
    }
    ,3000)
    }
    $(".left-btn").click(function(){
        clearInterval(f);
        if (index==0) {
            index=$(".bannar img").length-1;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }else{
            index--;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }
        
    })
    $(".right-btn").click(function(){
        clearInterval(f);
        if (index==$(".bannar img").length-1) {
            index=0;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }else{
            index++;
            $(".bannar img").css("opacity","0");
            $(".bannar img").eq(index).css("opacity","1");
            $(".botton").css("background-color","#ccc");
            $(".botton").eq(index).css("background-color","#fff");
            dingshiqi();
        }
    })
    $(".botton").click(function(){
        clearInterval(f);
        var indexx=$(this).index();
        index=indexx;
        $(".bannar img").css("opacity","0");
        $(".bannar img").eq(index).css("opacity","1");
        $(".botton").css("background-color","#ccc");
        $(".botton").eq(index).css("background-color","#fff");
        dingshiqi();
    })
})