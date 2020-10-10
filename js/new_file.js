


//console.log(document.body.clientHeight);
//标记线
var zhi=document.getElementById('zhiy');
var canvas=document.getElementById('canvas');
var scrollFunc = function (e) {
                e = e || window.event;
                if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
                    if (e.wheelDelta > 0) { //当滑轮向上滚动时
  //                      var userops=document.getElementsByClassName("user-ops")[0];
    //                    userops.style.bottom=15+'px';

						zhi.innerHTML=Math.round(canvas.height-window.pageYOffset)+" METERS HIGH";
                    }
                    if (e.wheelDelta < 0) {
//                        var userops=document.getElementsByClassName("user-ops")[0];
//                        userops.style.bottom=-59+'px';
						zhi.innerHTML=Math.round(canvas.height-window.pageYOffset)+" METERS HIGH";
                    }
                } else if (e.detail) {  //Firefox滑轮事件
                    if (e.detail> 0) { //当滑轮向上滚动时
//                        var userops=document.getElementsByClassName("user-ops")[0];
//                        userops.style.bottom=15+'px';
						zhi.innerHTML=Math.round(document.body.clientHeight-window.pageYOffset-zhi.offsetTop)+" METERS HIGH";
                    }
                    if (e.detail< 0) { //当滑轮向下滚动时
//                        var userops=document.getElementsByClassName("user-ops")[0];
//                        userops.style.bottom=-59+'px';
						zhi.innerHTML=Math.round(document.body.clientHeight-window.pageYOffset-zhi.offsetTop)+" METERS HIGH";
                    }
                }
            }
            //给页面绑定滑轮滚动事件
            if (document.addEventListener) {//firefox
                document.addEventListener('DOMMouseScroll', scrollFunc, false);
            }
            //滚动滑轮触发scrollFunc方法  //ie 谷歌
            window.onmousewheel = document.onmousewheel = scrollFunc;