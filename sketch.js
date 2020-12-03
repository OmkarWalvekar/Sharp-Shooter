var character,characterImg
var backGround,backGroungImg
var ship,shipImg
var laser,laserImg
var score
var spawnUFOGroup,spawnLaserGroup

function preload(){
  characterImg = loadImage("Character.png");
  backGroundImg = loadImage("graveyard.png");
  shipImg = loadImage("UFO.png");
  laserImg = loadImage("laser.png");
}

function setup(){
  createCanvas(900,700);

  backGround = createSprite(400,400);
  backGround.addImage(backGroundImg);
  backGround.velocityX = -1;
  backGround.scale = 1.2;

  character = createSprite(800,480.20,20);
  character.addImage(characterImg);
  character.scale = 0.2;

  spawnUFOGroup = new Group();
  spawnLaserGroup = new Group();

  score = 0


}

function draw(){
  //MOVING THE CHARACTER USING ARROW KEYS
  if(keyDown("UP_ARROW")) {
    character.y = character.y - 10
    
}

if(keyDown("DOWN_ARROW")) {
  character.y = character.y + 10
  
}


if(spawnUFOGroup.isTouching(spawnLaserGroup)){
  score = score+1
   spawnUFOGroup.destroyEach();
  spawnUFOGroup.setLifetimeEach(-1);
  spawnUFOGroup.setLifetimeEach(-1);
}
  if(spawnUFOGroup.isTouching(character)){
    score = score-1
     spawnUFOGroup.destroyEach();
    spawnUFOGroup.setLifetimeEach(-1);
    spawnUFOGroup.setLifetimeEach(-1);
     

}

 spawnUFO();
 spawnLaser();


if (backGround.x < 0){
  backGround.x = backGround.width/2;
}
    
  drawSprites();

  stroke("black");
  textSize(20);
  fill("white");
  text("Score: "+ score, 700,50);

}


function spawnUFO() {
  //write code here to spawn UFO
  if (frameCount % 120 === 0) {
    ship = createSprite(10,690,40,10);
    ship.y = random(330,450);    
    ship.velocityX = +5;
    
     //assign lifetime to the variable
    ship.setLifetimeEach = 800;
    ship.depth = character.depth + 1;
    
    //add image of UFO
     ship.addImage(shipImg);
     ship.scale=0.3;
    
    //add each UFO to the group
    spawnUFOGroup.add(ship);
    
  }
}
  function spawnLaser() {

    if(keyDown("space")) {

      //Making the laser beam
      laser = createSprite(800,character.y,20,20);
      laser.velocityX = -5;

      //Liftime and depth of laser
      laser.lifetime = 400;
      laser.depth = character.depth - 1;

      //Add image of laser
      laser.addImage(laserImg);
      laser.scale = 0.1;
      spawnLaserGroup.add(laser);
    }

  }