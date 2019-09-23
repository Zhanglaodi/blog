function my$(id) {
	return document.getElementById(id);
}
my$("cls").onclick = function() {
	my$("topad").style.display = "none";
}
//获取侧边栏
my$("rbtn").onclick = function() {
	my$("cbr").style.display = "block";
	my$("rtbar").style.right = "270px";
	my$("backbtn").style.right = "270px";
	my$("rtbar").style.zIndex="100000";
}
//my$("bbtn").onclick=function(){
//	document.getElementById("backbtn").onclick=function(){(function smoothscroll(){
//  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//  if (currentScroll > 0) {
//       window.requestAnimationFrame(smoothscroll);
//       window.scrollTo (0,currentScroll - (currentScroll/5));
//  }
//})();}
//}
//my$("cbr").style.height=document.body.clientHeight;
my$("barx").onclick = function() {
	my$("cbr").style.display = "none";
	my$("rtbar").style.right = "0px";
	my$("rtbar").style.zIndex="100000";
	my$("backbtn").style.right ="0";
}
my$("barx").onmouseover = function() {
	this.style.color = "red";
}
my$("barx").onmouseout = function() {
	this.style.color = "#000";
}
var list = document.getElementsByClassName("now")[0].getElementsByTagName("li");
//var dv=document.getElementsByClassName("div1");
function c$(k) {
	return document.getElementsByClassName('div1')[k].style.display = "block";
}

function d$(k) {

	return document.getElementsByClassName('div1')[k].style.display = "none";

}
//span经过时间

// <script>
/*
			这是一个轮播图的核心代码
			这也是我独自完成的代码
*/
var items = document.getElementsByClassName('item');
var points = document.getElementsByClassName('point');

var index = 0;

/*去掉active*/
var clearactive = function() {

	//这样目的是去掉active  既z-index: 1000;就是堆叠
	for(var i = 0; i < items.length; i++) {
		items[i].className = 'item';
	}
	for(var i = 0; i < points.length; i++) {
		points[i].className = 'point';
	}
}

var goindex = function() {
	clearactive();
	items[index].className = 'item active';
	points[index].className = 'point active';
}

var goright = function() {
	if(index < 4) {
		index++;
	} else {
		index = 0;
	}
	goindex();
}

var goleft = function() {
	if(index > 0) {
		index--;
	} else {
		index = 4;
	}
	goindex();
}
for(var i = 0; i < points.length; i++) {
	points[i].addEventListener('click', function() {
		var bbc = this.getAttribute('data-index');
		index = bbc;
		goindex();
	});
}
//按照逻辑往下运行代码====>

// setInterval(goright,3000);

var bbc = setInterval(goright, 3000);

function hetui() {
	bbc = setInterval(goright, 3000);
}

function setsj() {

	//clearInterval(bbc);
	clearInterval(bbc);

}

var btns = document.getElementsByClassName("btn1");
for(var t = 0; t < btns.length; t++) {

	btns[t].onmouseover = function() {

		this.style.opacity = "0.8";
	}
	btns[t].onmouseleave = function() {
		this.style.opacity = "0.1";
	}
}
//滑动门
//var clist=my$("hdm").getElementsByTagName("li");
//	for(var s=0;s<clist.length;s++){
//		clist[i].style.zIndex="0"
//	}
//

var items1=document.getElementsByClassName('item1');
	
	var index1=0;
	
	
	/*去掉active*/
	var clearactive1=function(){
		
		//这样目的是去掉active  既z-index: 1000;就是堆叠
		for(var i=0;i<items1.length;i++)
		{
			items1[i].className='item1';
		}
	}
	
	var goindex1=function(){
		clearactive1();
		items1[index1].className='item1 active';
	}
	
	var goright1=function(){
		if(index1<4)
			{
				index1++;
			}
		else
		{
			index1=0;
			}
			goindex1();
	}
	
	var goleft1=function(){
		if(index1>0)
		{
			index1--;
		}
		else
		{
			index1=4;
			}
		goindex1();
	}
	