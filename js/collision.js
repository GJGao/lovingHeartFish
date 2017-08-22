//检测大鱼和果实的碰撞
function momFruitCollision(){
	//当游戏还未结束，大鱼可以吃果实
	if(!data.gameOver){
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
				wave.born(fruit.x[i],fruit.y[i]);
			}
		}
	}
	}
}

//检测大鱼和小鱼的碰撞
function momBabyCollision(){
	//当大鱼吃到果实时，
	//且游戏还未结束，与小鱼碰撞才有效
	if(data.fruitNum>0 && !data.gameOver){
		var l = calLength2(mom.x,mom.y,baby.x,baby.y);
		//判断是否碰撞
		if(l<900){
			baby.babyBodyCount = 0;

			mom.momBodyCount = 0;
			//分数更新
			data.addScore();
			//绘制圆圈
			halo.born(baby.x,baby.y);
		}
	}

}