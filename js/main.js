//获取csv数据
var x=[];
var y=[];
var luj=[];
function mainx(){
    //console.log("main++"+arrx[0]);
    return arrx;
}
function mainy(){
    return arry;
}
function mainluj(){
    return arrluj;
}
x=mainx();
y=mainy();
luj=mainluj();
//alert(x[0]+y[0]+luj[0])
console.log("main++"+x[0]+y[0]+luj[0]+x.length);
//在canvas中画图片
var canvas=document.getElementById("canvas");

var ctx=canvas.getContext("2d");

//图片序号

var arr=[0,1,2]

//存储图片的数组

var Rarr=[];

//遍历序号，将图片放入Rarr中

for(var i=0;i<x.length;i++){

    (function(i){

            var img=new Image();

            img.src=luj[i];

            img.onload=function(){

                Rarr.push(this);

//只能在这个地方画图，出了IIFE Rarr数组为空

                ctx.drawImage(Rarr[i],x[i],y[i],100,100)

            }

        }

    )(i)

};
//标记线
var zhi=document.getElementById('zhiy');
var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) { //当滑轮向上滚动时
                                //                      var userops=document.getElementsByClassName("user-ops")[0];
            //                    userops.style.bottom=15+'px';
            zhi.innerHTML=document.body.clientHeight-window.pageYOffset-zhi.offsetTop+" METERS HIGH";
        }
        if (e.wheelDelta < 0) {
//                        var userops=document.getElementsByClassName("user-ops")[0];
//                        userops.style.bottom=-59+'px';
            zhi.innerHTML=document.body.clientHeight-zhi.offsetTop-window.pageYOffset+" METERS HIGH";
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail> 0) { //当滑轮向上滚动时
//                        var userops=document.getElementsByClassName("user-ops")[0];
//                        userops.style.bottom=15+'px';
            zhi.innerHTML=document.body.clientHeight-zhi.offsetTop-window.pageYOffset+" METERS HIGH";
        }
        if (e.detail< 0) { //当滑轮向下滚动时
//                        var userops=document.getElementsByClassName("user-ops")[0];
//                        userops.style.bottom=-59+'px';
            zhi.innerHTML=document.body.clientHeight-zhi.offsetTop-window.pageYOffset+" METERS HIGH";
        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {//firefox
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法  //ie 谷歌
window.onmousewheel = document.onmousewheel = scrollFunc;