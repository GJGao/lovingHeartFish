var dataObj = function(){
	//果实数量
	this.fruitNum = 0;
	//吃到蓝色果实
	this.double = 1;

	this.score = 0;
};

//绘制分值
dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	ctx1.fillStyle = "white";
	//ctx1.fillText("果实数量："+this.fruitNum,w*0.5,h-50);
	//ctx1.fillText("倍数："+this.double,w*0.5,h-80);
	ctx1.fillText("分值："+this.score,w*0.5,h-20);
};

dataObj.prototype.addScore = function(){
	this.score += this.fruitNum*100*this.double;
	this.fruitNum = 0;
	this.double = 1;
};