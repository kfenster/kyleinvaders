//set up main game parameters
function setup(){
  this.invadeVelocity =  10;
  this.ship = null;
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
function Invade(x, y, rank, file) {
    this.invade.x = x;
    this.invade.y = y;
    this.invade.rank = rank;
    this.invade.file = file;
    this.invade.width = 18;
    this.invade.height = 14;
};
//set ship
function Ship(x, y) {
    this.ship.x = x;
    this.ship.y = y;
    this.ship.width = 20;
    this.ship.height = 16;
    this.ship.l = false;
    this.ship.r = false;
};
//set projectile
function Proj(x, y, velocity) {
    this.proj.x = x;
    this.proj.y = y;
    this.velocity = velocity;
    console.log (this.x);
};

//set up invader fields and array. also checks collisions
function maintain(Proj, setup, Ship, Invade){
  var ranks = 5;
    var files = 10;
    var invaders = [];
    for(var rank = 0; rank < ranks; rank++){
        for(var file = 0; file < files; file++) {
           invade.push(new Invade(
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

                if(this.proj.x >= (this.invade.x - 18/2) && this.proj.x <= (this.invade.x + 18/2) &&
                    this.proj.y >= (this.invade.y - 14/2) && this.proj.y <= (this.invade.y + 14/2)) {


                    this.proj.splice(j--, 1);
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
            if((invade.x + 18/2) > (this.ship.x - 20/2) &&
                (invade.x - 18/2) < (this.ship.x + 20/2) &&
                (invade.y + 14/2) > (this.ship.y - 16/2) &&
                (invade.y - 14/2) < (this.ship.y + 16/2)) {

            }
        };

  }
//set ship movement
  function moveShip(){
    window.addEventListener('keydown', function(event){
      if (event.keyCode === 37){
        this.ship.l = true;
      } else if (event.keyCode === 39){
        this.ship.r = true;
        }
    });
    window.addEventListener('keyup', function(event){
      if (event.keyCode === 37){
        this.ship.l = false;
      } else if (event.keyCode === 39){
        this.ship.r = false;

        }

        window.addEventListener('keydown', function(event){
          if (event.keyCode === 32){
            console.log ("Fire!");

            }
    if(this.ship.x < 500) {
        this.ship.x = 500;
    }
    if(this.ship.x > 500) {
        this.ship.x = 500;
    }

  })
})
};


//projectile spawing, spawn rate, velocity, and travel
function fireproj() {

  if(this.lastProjTime === null || ((new Date()).valueOf() - this.lastProjTime) > (1000 / this.setup.rocketMaxFireRate))
      {

    this.proj.push(new Proj(this.ship.x, this.ship.y - 12, this.setup.projVelocity));
    this.lastProjTime = (new Date()).valueOf();
     }
};

//draw objects
  function draw(setup, Invade, Ship, proj, maintain){

    //get the canvas
    var canvas = document.getElementsByTagName('canvas')[0];
    var brush = canvas.getContext('2d');
    brush.beginPath();
    //draw ship
    brush.fillRect(this.ship.x - (20 / 2), this.ship.y - (16 / 2), 20, 16);

  //  Draw invaders.

    for(var i=0; i<this.invaders.length; i++) {
      var invaders = this.invaders[i];
      brush.fillRect(invadeers.x - 18/2, invadeers.y - 14/2, 18, 14);
    }
    //draw projectiles

    for(var i=0; i<this.proj.length; i++) {
      var proj = this.proj[i];
      brush.fillRect(this.proj.x, this.proj.y - 2, 1, 4);
      }
    //animate and update
    brush.clearRect(0, 0, 500, 500)
    update();
    window.requestAnimationFrame(draw);

  };
  draw();
