var stage = new createjs.Stage('gameView')
createjs.Ticker.setFPS(30)

createjs.Ticker.addEventListener('tick', stage)
// 容器 
var gameView = new createjs.Container();
// // 移动画布
// gameView.x = 30
// gameView.y = 30


stage.addChild(gameView)

var n = 2, dt = 255
function addRect() {
	var r = parseInt(Math.random()* 255)
	var g = parseInt(Math.random()* 255)
	var b = parseInt(Math.random()* 255)
	var color1 = `rgb(${r}, ${g}, ${b})`
	console.log(color1)
	var color2 = `rgba(${(r+dt)%255}, ${g}, ${b}, 0.5)` 
	console.log(color2)
	var x = parseInt(Math.random()* n)
	var y = parseInt(Math.random()* n)
	console.log(x, y)
	for(var indexX = 0; indexX < n; indexX++){
		for(var indexY = 0; indexY < n; indexY++){
			var r = new Rect(n, color1, color2)
			gameView.addChild(r)
			r.x = indexX
			r.y = indexY

			if(r.x == x && r.y == y) {
				r.setRectType(2)
				r.addEventListener('click', function() {
					if(n < 12) {
						n++
					}
					if(dt >= 30){
						dt -= 5
					}
					gameView.removeAllChildren()
					addRect()
				})
			}

			r.x = indexX *(600 / n)
			r.y = indexY *(600 / n)

			// if(r.getRectType() == 2) {
				
			// }
		}
	}
}

addRect()