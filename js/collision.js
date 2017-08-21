//判断大鱼和果实的距离
function momFruitCollision(){
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]){
			//计算两者的距离
			var l = calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
			//判断是否碰撞
			if(l<900){
				fruit.dead(i);
			}
		}
	}
}