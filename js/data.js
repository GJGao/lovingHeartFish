var dataObj = function(){
	//果实数量
	this.fruitNum = 0;
	//吃到蓝色果实
	this.double = 1;
};

dataObj.prototype.reset = function(){
	this.fruitNum = 0;
	this.double = 1;
};

//绘制分值
dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	ctx1.fillStyle = "white";
	ctx1.fillText("果实数量："+this.fruitNum,w*0.5,h-50);
	ctx1.fillText("分数倍数："+this.double,w*0.5,h-80);
};