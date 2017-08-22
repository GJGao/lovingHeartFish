var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;
};

momObj.prototype.init = function(){
	this.x = canWidth*0.5;
	this.y = canHeight*0.5;
	this.angle = 0;
	this.bigEye.src = "src/bigEye0.png";
	this.bigBody.src = "src/bigSwim0.png";
	//this.bigTail.src = "src/bigTail0.png";
};

momObj.prototype.draw = function(){
	//大鱼的坐标趋向于鼠标的坐标，实现大鱼随着鼠标移动
	this.x = lerpDistance(mx,this.x,0.99);
	this.y = lerpDistance(my,this.y,0.99);

	//角度差
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY,deltaX)  + Math.PI;

	//大鱼的角度趋向于鼠标的角度（大鱼或鼠标在移动时会有产生角度）
	this.angle = lerpAngle(beta,this.angle,0.6);

	this.momTailTimer += deltaTime;
	if(this.momTailTimer>50){
		this.momTailCount = (this.momTailCount + 1)%8;
		this.momTailTimer %=50;
	}

	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	//设置相对位置，使大鱼的眼睛、身体和尾巴始终保持在恰当的相对位置
	var momTailCount =this.momTailCount;
	ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+30,-momTail[momTailCount].height*0.5);
	ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
	ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);

	ctx1.restore();
};