var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	//this.babyTail = new Image();

	//创建一个定时器，小鱼的尾巴图片帧循环播放
	//产生尾巴摆动的效果
	this.babyTailTimer = 0;//定时器
	this.babyTailCount = 0;//记录当前播放到哪个尾巴图片

};

babyObj.prototype.init = function(){
	this.x = canWidth*0.5 - 50;
	this.y = canHeight*0.5 +50;
	this.angle = 0;
	this.babyEye.src = "src/babyEye0.png";
	this.babyBody.src = "src/babyFade0.png";
	//this.babyTail.src = "src/babyTail0.png";
};

babyObj.prototype.draw = function(){
	//小鱼的坐标趋向于大鱼坐标，小鱼随着大鱼游动
	this.x = lerpDistance(mom.x,this.x,0.98);
	this.y = lerpDistance(mom.y,this.y,0.98);

	//小鱼的角度
	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var beta = Math.atan2(deltaY,deltaX)  + Math.PI;
	this.angle = lerpAngle(beta,this.angle,0.6);

	//小鱼的尾巴-计时器
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer  %= 50;//复原计时器
	}


	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(babyTail[this.babyTailCount],-babyTail[this.babyTailCount].width*0.5+23,-babyTail[this.babyTailCount].height*0.5);
	ctx1.drawImage(this.babyBody,-this.babyBody.width*0.5,-this.babyBody.height*0.5);
	ctx1.drawImage(this.babyEye,-this.babyEye.width*0.5,-this.babyEye.height*0.5);
	ctx1.restore();
};