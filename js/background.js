// 鼠标点击window
 window.onclick=function(e){
 // 创建img
 let img=document.createElement("img");
 // 设置src
 img.setAttribute("src","timg.gif");
 // 设置图片大小随机
 let w=Math.random()*50+50;
 img.setAttribute("height",w);
 // 图片位置,绝对定位
 img.style.position="absolute";
  
 img.style.left=(e.clientX-w/2)+"px";
 img.style.top=(e.clientY-w/2)+"px";
  
 // 将图片插入body

  
 }