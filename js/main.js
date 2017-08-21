var can1;
var cna2;

var ctx1;
var ctx2;

//上次的时间
var lastTime;
//时间间隔差
var deltaTime;

var canWidth;
var canHeight;

//定义背景图片
var bgPic = new Image();
//定义海葵
var ane;



//当文档加载完后才运行游戏
document.body.onload = newgame;

function newgame(){
	//首先进行初始化工作
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	//获取canvas context
	can1 = document.getElementById("canvas1");//用于绘制大鱼小鱼、UI、圈圈效果
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//用于绘制背景、海棠、食物
	ctx2 = can2.getContext('2d');

	bgPic.src = "src/background.jpg";//图片加载

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();
}

//游戏循环，让画面动起来
function gameloop(){

	window.requestAnimFrame(gameloop);//定时器，这是让游戏动起来的关键
	var now = Date.now();//获取当前时间
	deltaTime = now - lastTime;//当前时间与上次时间的时间差
	lastTime = now;
	//console.log(deltaTime) //从这里可以查看deltaTime是一个变化的值

	drawBackground();
	ane.draw();
}
