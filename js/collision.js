//检测大鱼和小鱼的碰撞
function momFruitCollision(){
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			//计算两者的距离
			var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			//判断是否碰撞
			if(l<900){
				fruit.dead(i);

				data.fruitNum++;

				mom.momBodyCount++;
				if(mom.momBodyCount>7){
					mom.momBodyCount=7;
				}

				//判断是否吃掉蓝色果实
				if(fruit.fruitType[i] == "blue"){
					data.double = 2;
				}
			}
		}
	}
}

//检测大鱼和小鱼的碰撞
function momBabyCollision(){

			var l = calLength2(mom.x,mom.y,baby.x,baby.y);
			//判断是否碰撞
			if(l<900){
				baby.babyBodyCount = 0;

				mom.momBodyCount = 0;
				//分数更新
				data.addScore();
			}
}