var dataObj = function(){
	//果实数量
	this.fruitNum = 0;
	//吃到蓝色果实
	this.double = 1;
	this.score = 0;

	this.gameOver = false//游戏状态
	this.alpha = 0;//游戏结束显示字体透明度
};

//绘制分值
dataObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;

	//save()和restore()组合在一起使用可以使他们两者间的效果只作用于该对象
	ctx1.save();
	//字体阴影
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";

	ctx1.fillStyle = "white";
	//ctx1.fillText("果实数量："+this.fruitNum,w*0.5,h-50);
	//ctx1.fillText("倍数："+this.double,w*0.5,h-80);
	ctx1.fillText("分值："+this.score,w*0.5,h-20);

	//显示游戏结束
	if(this.gameOver){
		this.alpha += deltaTime*0.0005;
		if(this.alpha>1){
			this.alpha = 1;
		}

		//游戏结束动画
		ctx1.fillStyle = "rgba(255,255,255," + this.alpha+")";
		ctx1.fillText("游戏结束",w*0.5,h*0.5);
		ctx1.restore();
	}
};

dataObj.prototype.addScore = function(){
	this.score += this.fruitNum*100*this.double;
	this.fruitNum = 0;
	this.double = 1;
};