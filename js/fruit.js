var fruitObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.speed = [];
	this.fruitType = [];//区别果实类型
	this.orange = new Image();
	this.blue = new Image();
};

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i = 0;i < this.num;i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.speed[i] = Math.random()*0.017+0.003;
		this.fruitType[i] = "";
		this.born(i);
	}

	this.orange.src = "src/fruit.png";
	this.blue.src = "src/blue.png";
};

fruitObj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.fruitType[i] == "blue"){
				var pic = this.blue;
			}else{
				var pic = this.orange;
			}

			if(this.l[i] <= 14){
				this.l[i] += this.speed[i]*deltaTime;
			}else{
				this.y[i] -= this.speed[i]*7*deltaTime;
			}

			ctx2.drawImage(pic,this.x[i] - this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);

			if(this.y[i] <0){
				this.alive[i] = false;
				this.l[i] = 0;
			}
		}
	}
};

//检测当前果实的数量
fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random()*ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.3){
		this.fruitType[i] = "blue";
	}
	else{
		this.fruitType[i] = "orange";
	}
};

fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
};

function fruitMonitor(){
	var num = 0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i])
			num++;
	}

	if(num<15){
		sendFruit();
		return;
	}
}

function sendFruit(){
	for(var i = 0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}

