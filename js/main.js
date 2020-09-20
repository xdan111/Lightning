// JavaScript Document
var divfather=document.getElementById('root');
//顶层div
var divtop=document.createElement('div');
divtop.setAttribute("class","top");

//表格div
var divcenter=document.createElement('div');
divcenter.setAttribute("class","center");
//房屋div
var divbotton=document.createElement('div');
divbotton.setAttribute("class","botton");
divfather.appendChild(divtop);
divfather.appendChild(divcenter);
divfather.appendChild(divbotton);

//标记线
var zhi=document.createElement('label');
divcenter.appendChild(zhi);
zhi.setAttribute("class","zhiy");
//画网格
var canvas=document.createElement('canvas');
divcenter.appendChild(canvas);
//获取绘图环境
var context=canvas.getContext('2d');

canvas.width='500';
canvas.height='800';
canvas.setAttribute("class","pen");
//context.lineWidth=5;
//context.strokeRect(0,0,300,200);



function drawGrid(stepX, stepY, color, lineWidth){
    // 创建垂直格网线路径
    for(var i = 0.5 + stepX; i < canvas.width; i += stepX){
        context.moveTo(i, 0);
        context.lineTo(i, canvas.height);
    }
    // 创建水平格网线路径
    for(var j = 0.5 + stepY; j < canvas.height; j += stepY){
        context.moveTo(0, j);
        context.lineTo(canvas.width, j);
    }

    // 设置绘制颜色
    context.strokeStyle = color;
    // 设置绘制线段的宽度
    context.lineWidth = lineWidth;
    // 绘制格网
    context.stroke();
    // 清除路径
    context.beginPath();
}
drawGrid(10, 10, 'block', 0.5);
function drawAxes(origin, x_Len, y_Len, color, lineWidth){

    // 创建水平坐标轴路径
    context.moveTo(origin[0], origin[1]);
    context.lineTo(origin[0] + x_Len, origin[1]);

    // 创建垂直坐标轴路径
    context.moveTo(origin[0], origin[1]);
    context.lineTo(origin[0], origin[1] - y_Len);

    // 创建坐标轴的刻度线路径
    for(var i = origin[0] + 30; i < x_Len; i += 30){
        context.moveTo(i, origin[1] - 10);
        context.lineTo(i, origin[1] + 10);
    }
    for(var j = origin[1] - 30; j > origin[1] - y_Len; j -= 30){
        // console.log(j);
        context.moveTo(origin[0] - 10, j);
        context.lineTo(origin[0] + 10, j);
    }


    // 设置绘制颜色
    context.strokeStyle = color;
    // 设置绘制线段的宽度
    context.lineWidth = lineWidth;
    // 绘制坐标轴
    context.stroke();
    // 清除路径
    context.beginPath();
}
drawAxes([0, 800], 1920, 800, 'blue', 2);



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


