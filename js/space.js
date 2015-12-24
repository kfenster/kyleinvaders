//set up main game parameters
function setup(){
  this.invadeVelocity =  10;
  this.Ship = null;
  this.invade = [];

  invadeInitialVelocity = 25,
  invadeDropDistance = 20,
  projVelocity = 120,
  projMaxFireRate = 2,
  invadeRanks = 5,
  invadeFiles = 10,
  shipSpeed = 120,
  gameWidth = 500,
  gameHeight = 500
};

//set invaders
function Invader(x, y, rank, file) {
    this.x = x;
    this.y = y;
    this.rank = rank;
    this.file = file;
    this.width = 18;
    this.height = 14;
};

// Setup the ship at a location
function Ship(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 16;
};

// Setup the projectile launched by the ship
function Proj(x, y, velocity) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    console.log (this.x);
};

//set up invader fields and array. also checks collisions
function maintain(Proj, setup, Ship, Invader){
  var ranks = 5;
    var files = 10;
    var invaders = [];
    for(var rank = 0; rank < ranks; rank++){
        for(var file = 0; file < files; file++) {
           invade.push(new Invader(
               (500 / 2) + ((files/2 - files) * 200 / files),
               (0 + rank * 20, rank, file)));
       }
   }
   console.log (invaders);
    this.invaders = invaders;
    this.invadeCurrentVelocity = this.invadeInitialVelocity;
    this.invadeVelocity = {x: -this.invadeInitialVelocity, y:0};
    this.invadeNextVelocity = null;
    console.log (invade)
    for(i=0; i<this.invaders.length; i++) {
            var invade = this.invade[i];
            var impact = false;

            for(var j=0; j<this.Proj.length; j++){
                var proj = this.Proj[j];

                if(this.Proj.x >= (this.Invader.x - 18/2) && this.Proj.x <= (this.Invader.x + 18/2) &&
                    this.Proj.y >= (this.Invader.y - 14/2) && this.Proj.y <= (this.Invader.y + 14/2)) {


                    this.Proj.splice(j--, 1);
                    impact = true;

                    break;
                }
            }
            if(impact) {
                this.invaders.splice(i--, 1);
            }
        }
        //check for invader collisions with ship
        for(var i=0; i<this.invaders.length; i++) {
            var invaders = this.invaders[i];
            if((invade.x + 18/2) > (this.Ship.x - 20/2) &&
                (invade.x - 18/2) < (this.Ship.x + 20/2) &&
                (invade.y + 14/2) > (this.Ship.y - 16/2) &&
                (invade.y - 14/2) < (this.Ship.y + 16/2)) {

            }
        };

  }
//set ship movement
  function moveShip(){
    window.addEventListener('keydown', function(event){
      if (event.keyCode === 37){
        this.Ship.l = true;
      } else if (event.keyCode === 39){
        this.Ship.r = true;
        }
    });
    window.addEventListener('keyup', function(event){
      if (event.keyCode === 37){
        this.Ship.l = false;
      } else if (event.keyCode === 39){
        this.Ship.r = false;

        }

        window.addEventListener('keydown', function(event){
          if (event.keyCode === 32){
            console.log ("Fire!");

            }
    if(this.Ship.x < 500) {
        this.Ship.x = 500;
    }
    if(this.Ship.x > 500) {
        this.Ship.x = 500;
    }

  })
})
};


//projectile spawing, spawn rate, velocity, and travel
function fireproj() {

  if(this.lastProjTime === null || ((new Date()).valueOf() - this.lastProjTime) > (1000 / this.setup.rocketMaxFireRate))
      {

    this.Proj.push(new Proj(this.Ship.x, this.Ship.y - 12, this.setup.projVelocity));
    this.lastProjTime = (new Date()).valueOf();
     }
};

//draw objects
  function draw(setup, Invader, Ship, proj, maintain){

    //get the canvas
    var canvas = document.getElementsByTagName('canvas')[0];
    var brush = canvas.getContext('2d');
    brush.beginPath();
    //draw ship
    brush.fillRect(this.Ship.x - (20 / 2), this.Ship.y - (16 / 2), 20, 16);

/*    //  Draw invaders.
    for(var i=0; i<this.invaders.length; i++) {
      var invaders = this.invaders[i];
      brush.fillRect(this.invaders.x - 18/2, this.invaders.y - 14/2, 18, 14);
    }*/

    //draw projectiles
    for(var i=0; i<this.Proj.length; i++) {
      var proj = this.Proj[i];
      brush.fillRect(this.Proj.x, this.Proj.y - 2, 1, 4);
      }
    //animate and update
    brush.clearRect(0, 0, 500, 500)
    //update();
    window.requestAnimationFrame(draw);

  };
  draw();

  /* ****************************** 
     New code section
     ****************************** */

  //  Create the ship.
    this.ship = new Ship(game.width / 2, game.gameBounds.bottom); 
