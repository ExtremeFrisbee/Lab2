var canvas;
var ctx;
function Game()
{
        this.initCanvas();
        player = new Player();
        goal = new Goal();
}

Game.prototype.initCanvas = function(){

	 canvas = document.createElement("canvas");
	 //ctx is the contex we draw on-->
	 ctx = canvas.getContext("2d");


	 document.body.appendChild(canvas);
	 canvas.width = window.innerWidth;
	 canvas.height = window.innerHeight;
}

Game.prototype.GameLoop = function()
{

	ctx.clearRect(0,0,canvas.width,canvas.height);//clears canvas
	player.draw();
	player.Update();

	
	if(player.checkCollision(goal)) //checks the collision
	{
		ctx.save();
		//add in your own colour
		ctx.fillStyle=rgb(255,0,255);
		//change this
		ctx.font = 'italic 30pt Calibri';
		//otherwise bottom
		ctx.textBaseline = "top";
		//Put your message here; x and y are where the message will appear...
		ctx.fillText("You tried",200,200);
		//Any idea what save and restore do?
		ctx.restore();
	}
	else
	{
		goal.draw();
	}
	
	window.requestAnimationFrame(game.GameLoop);
}
/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min)
	{ 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}