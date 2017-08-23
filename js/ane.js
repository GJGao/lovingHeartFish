/*绘制海葵*/
//创建海葵对象
var aneObj = function(){
	//绘制二次贝塞尔曲线
	//开始点、控制点
	this.rootx = [];//海葵的水平位置
	//结束点,通过正选函数控制
	this.headx =[];
	this.heady = [];
	//this.len = [];//海葵的长度
	//角度
	this.alpha = 0;
	//摆动的振幅
	this.amp = [];
};

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){
	//给每条海葵随机生成水平位置和长度
	for(var i = 0;i < this.num;i++){
		this.rootx[i] = i*16 + Math.random()*20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 +Math.random()*50;
		this.amp[i] = Math.random()*50+50;
		//this.len[i] = 200+Math.random()*50;
	}
};

aneObj.prototype.draw = function(){
	//角度随着时间变化
	this.alpha += deltaTime*0.0008;
	var l = Math.sin(this.alpha);//[-1,1]
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3b154e";
	for(var i = 0;i < this.num;i++){
		ctx2.beginPath();
		//起始点
		ctx2.moveTo(this.rootx[i],canHeight);
		this.headx[i] = this.rootx[i] + l*this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
};