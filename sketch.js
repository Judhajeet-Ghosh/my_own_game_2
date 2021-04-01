var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player,ground , enemy,treasure;


function preload(){
  bg = loadImage("Road.png")
  playerImg = loadAnimation("Runner-1.png","Runner-2.png")
  enemyImg = loadImage("enemy.png")
  treasureImg = loadImage("treasure.png")
}


function setup() {
  createCanvas(1535 ,790);


ground = createSprite(750,300,600,1000)
ground.addImage(bg)
ground.velocityY = 6


 player =  createSprite(760,700,50,50);
player.addAnimation("running" ,playerImg)
player.scale = 0.2;

enemyGroup = new Group();
treasureGroup = new Group();


 
 
 
}



function draw() {
  background("black");
 
 if(ground.y > 500 ){
   ground.y = 300
 }

 
  createEdgeSprites()
  
  if(keyDown("w")|| keyDown(UP_ARROW)){
  player.y = player.y - 10
  }

  if(keyDown("s")|| keyDown(DOWN_ARROW)){
  player.y = player.y + 10
  }

  if(keyDown("a")|| keyDown(LEFT_ARROW)){
    player.x = player.x - 10
    }
  
    if(keyDown("d")|| keyDown(RIGHT_ARROW)){
      player.x = player.x +10
      }
    




      // if (gameState===PLAY){

      // }

      // else if (gameState === END){

      // }









   spawnEnemy()
   spawnTreasure()

    
  
  drawSprites();
}

function spawnEnemy(){
  if( frameCount % 200 === 0 ){
    enemy = createSprite(0,0,50,50)
    enemy.x = Math.round(random(100,1600))
    enemy.velocityY = 8
    enemy.addImage(enemyImg)
    enemy.scale = 0.4

    enemyGroup.add(enemy)

    enemy.lifetime = 200
  }
}




function spawnTreasure(){
  if(frameCount % 120 === 0){
    treasure = createSprite(0,0,50,50)
    treasure.x = Math.round(random(100,1500))
    treasure.velocityY = 3
    treasure.addImage(treasureImg)
    treasure.scale = 0.2

    treasureGroup.add(treasure)

    treasure.lifetime = 300
  }
}