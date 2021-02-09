
//console.log(document.body.clientHeight);
//标记线
var zhi=document.getElementById('zhiy');
var canvas=document.getElementById('canvas');

//判断页面滚动
var onScroll = function(){
	var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;	   
	let msg = this.msg;//this指向windows
	console.log(this);
	this.msg = e;
/*
	if (this.msg > msg) {
		//向下滚动
		var h=Math.round(canvas.height-window.pageYOffset);
		zhi.innerHTML=(h*5)+" METERS HIGH"
	}else {
		//向上滚动
		var h=Math.round(canvas.height-window.pageYOffset);
		zhi.innerHTML=(h*5)+" METERS HIGH"
		// zhi.innerHTML=Math.round(canvas.height-window.pageYOffset)*5+" METERS HIGH";
	}
*/

	var h=Math.round(canvas.height-window.pageYOffset);
	console.pageYOffset;
	var realHight=h*5;
	var area="Atomosphere";
	console.log(realHight);

	if (realHight <= 12000){
		area="Troposphere 0 - 12 km";
		}
	else if (realHight>12000 && realHight<=45000){
		area="Stratosphere 12 km - 45 km";
		}
	else if (realHight>45000 && realHight<=80000){
		area="Mesosphere 45 km - 80 km";
		}
	else {
		area="Ionosphere > 80 km";
		}
		zhi.innerHTML=(h*5)+" METERS HIGH"+" --- "+area;
		zhi.style.borderTop="1px dashed";
	if(realHight < 0){
		zhi.innerHTML='';
		zhi.style.borderTop="0px";
	}
		

	
			
}

//给页面绑定滑轮滚动事件,滑轮滚动时触发scrollFunc方法
/*   if (document.addEventListener) {//firefox
document.addEventListener('DOMMouseScroll', scrollFunc, false);
} */
//页面滚动触发
window.onscroll = onScroll;
		   