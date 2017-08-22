var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	//this.babyEye = new Image();
	//this.babyBody = new Image();
	//this.babyTail = new Image();

	//创建一个定时器，小鱼的尾巴图片帧循环播放
	//产生尾巴摆动的效果
	this.babyTailTimer = 0;//定时器
	this.babyTailCount = 0;//记录当前播放到哪个尾巴图片

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeTnterval = 1000;//定义时间间隔

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
};

babyObj.prototype.init = function(){
	this.x = canWidth*0.5 - 50;
	this.y = canHeight*0.5 +50;
	this.angle = 0;
	//this.babyEye.src = "src/babyEye0.png";
	//this.babyBody.src = "src/babyFade0.png";
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

	//小鱼的尾巴的计数
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer  %= 50;//复原计时器
	}

	//小鱼的眼睛的计数
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer>this.babyEyeTnterval){
		this.babyEyeCount = (this.babyEyeCount+1)%2;
		this.babyEyeTimer %= this.babyEyeTnterval;

		if(this.babyEyeCount == 0){
			this.babyEyeTnterval = Math.random()*1500+2000;//睁开眼睛的时间
		}else{
			this.babyEyeTnterval = 100;//闭眼的时间，因为闭眼时间短暂，时间都差不多
		}
	}

	//小鱼身体的计数
	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer>400){
		this.babyBodyCount = this.babyBodyCount +1;
		this.babyBodyTimer = 0;
		if(this.babyBodyCount>19){
			this.babyBodyCount = 19;
			//游戏结束

		}
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(babyTail[this.babyTailCount],-babyTail[this.babyTailCount].width*0.5+23,-babyTail[this.babyTailCount].height*0.5);

	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);

	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
	ctx1.restore();
};