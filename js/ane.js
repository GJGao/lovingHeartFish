/*绘制海葵*/
//创建海葵对象
var aneObj = function(){
	this.x = [];//海葵的水平位置
	this.len = [];//海葵的长度
};

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
	//给每条海葵随机生成水平位置和长度
	for(var i = 0;i < this.num;i++){
		this.x[i] = i*16 + Math.random()*20;
		this.len[i] = 200+Math.random()*50;
	}
};

aneObj.prototype.draw = function(){

	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for(var i = 0;i < this.num;i++){
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],canHeight);
		ctx2.lineTo(this.x[i],canHeight-this.len[i]);
		ctx2.stroke();
	}
	ctx2.restore();
};