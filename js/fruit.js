var fruitObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.speed = [];
	this.orange = new Image();
	this.blue = new Image();
};

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i = 0;i < this.num;i++){
		this.alive[i] = true;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.speed[i] = Math.random()*0.01+0.005;
		this.born(i);
	}

	this.orange.src = "src/fruit.png";
	this.blue.src = "src/blue.png";
};

fruitObj.prototype.draw = function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			if(this.l[i] <= 14){
			this.l[i] += this.speed[i]*deltaTime;
			}else{
				this.y[i] -= this.speed[i]*7*deltaTime;
			}

			ctx2.drawImage(this.orange,this.x[i] - this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);

			if(this.y[i] <0){
				this.alive[i] = false;
			}
		}
	}
};

//检测当前果实的数量
fruitObj.prototype.born = function(i){
	var aneID = Math.floor(Math.random()*ane.num);
	this.x[i] = ane.x[aneID];
	this.y[i] = canHeight - ane.len[aneID];
};


