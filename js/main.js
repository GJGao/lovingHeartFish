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
//定义海葵对象
var ane;
//定义食物对象
var fruit;
//定义大鱼小鱼对象
var mom;
var baby;
//定义鼠标的坐标
var mx;
var my;

//定义小鱼尾巴序列帧的数组
var babyTail = [];
//定义小鱼的眼睛
var babyEye = [];
//定义小鱼的身体，放身体变化的图片地址
var babyBody = [];

//定义大鱼尾巴序列帧的数组
var momTail = [];
var momEye = [];
var momBodyOrange = [];
var momBodyBlue = [];

var data;

//白色圈
var wave;
//橙色圈
var halo;

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

	//添加鼠标监听事件
	can1.addEventListener('mousemove',onMouseMove,false);
	//添加鼠标点击事件，game over后可点击重新开始游戏
	can1.addEventListener('click',function(){
		if(data.gameOver==true){
			newgame();
		}
	});

	bgPic.src = "src/background.jpg";//图片加载

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth*0.5;
	my = canHeight*0.5;

	//实例化小鱼的每个尾巴图片
	for(var i=0;i<8;i++){
		babyTail[i] = new Image();
		babyTail[i].src = "src/babyTail" + i +".png";
	}

	for(var i=0;i<2;i++){
		babyEye[i] = new Image();
		babyEye[i].src = "src/babyEye" + i +".png";
	}

	for(var i=0;i<20;i++){
		babyBody[i] = new Image();
		babyBody[i].src = "src/babyFade" + i +".png";
	}

	for(var i=0;i<8;i++){
		momTail[i] = new Image();
		momTail[i].src = "src/bigTail" + i +".png";
	}

	for(var i=0;i<2;i++){
		momEye[i] = new Image();
		momEye[i].src = "src/bigEye" + i +".png";
	}

	data = new dataObj();

	for(var i=0;i<8;i++){
		momBodyOrange[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOrange[i].src = "src/bigSwim" + i +".png";
		momBodyBlue[i].src = "src/bigSwimBlue" + i +".png";
	}

	ctx1.font = "30px Verdana"//分值的字体
	ctx1.textAlign = "center";

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();
}

//游戏循环，让画面动起来
function gameloop(){

	window.requestAnimFrame(gameloop);//定时器，这是让游戏动起来的关键
	var now = Date.now();//获取当前时间
	deltaTime = now - lastTime;//当前时间与上次时间的时间差
	lastTime = now;

	if(deltaTime>40) deltaTime = 40;//防止果实过大（果实的大小跟deltaTime的值成正比
	//console.log(deltaTime) //从这里可以查看deltaTime是一个变化的值

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();

	momFruitCollision();
	momBabyCollision();

	data.draw();
	wave.draw();
	halo.draw();
}

function onMouseMove(e){
	//当游戏结束，鼠标就不能控制大鱼
	if(!data.gameOver){
		if(e.offSetX || e.layerX){
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
		//console.log(mx);//获取鼠标坐标
	}
	}
}
