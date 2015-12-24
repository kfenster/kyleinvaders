window.onkeydown = checkKey;

// set up the overall game area
var canvas = document.getElementsByTagName('canvas')[0];
this.maxX = canvas.width;
this.maxY = canvas.height;

this.ship = new Ship(20);  // only need one ship & this is it
this.shipMoveInterval = 5;
this.missileArray = [];  // array of launched missiles

// Create a 
function Missile(x,y) {
	this.x = x;
	this.y = y;
}

// Setup the ship at a location
function Ship(x) {
    this.x = x;
    this.width = 20;
    this.height = 16;
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
       moveShip(-5);
       drawShip();
    }
    else if (e.keyCode == '39') {
       // right arrow
       moveShip(5);
       drawShip();
    }
    else if (e.keyCode == '32') {
       // spacebar
       //add a projectile to the missile array
       var newMissile = new Missile(this.ship.x - 1,
       								this.maxY - this.ship.height - 6);
       this.missileArray.push(newMissile);
       drawMissile(newMissile);
    }

}

// move the ship dist units, negative for left, positive for right
function moveShip(dist) {
	this.ship.x +=  dist;
	// check whether we're "too close to the edge" (within a half ship's width of 
	//	either boundary) and reset if we are
	if (this.ship.x < this.ship.width/2) { 
			this.ship.x = this.ship.width/2
	} else {
		if (this.ship.x > (this.maxX-this.ship.width/2)) {
			this.ship.x = this.maxX-this.ship.width/2;
		}
	}
}

//draw objects
function drawShip(){

    //get the canvas
    var canvas = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');
    context.clearRect(0,canvas.height - this.ship.height,canvas.width,this.ship.height)
    context.fillStyle = "blue";
    //draw ship
    context.fillRect(this.ship.x - (this.ship.width / 2), canvas.height - this.ship.height, this.ship.width, this.ship.height);
}

function drawMissile(missile) {
    //get the canvas
    var canvas = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');
    context.fillStyle = "red";
    //draw missile
    context.fillRect(missile.x, missile.y, 4, 6);

}

drawShip();
/*drawShip(moveShip(10));
drawShip(moveShip(-50));
drawShip(moveShip(200));
drawShip(moveShip(15));
drawShip(moveShip(-30));*/
