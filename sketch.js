
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.x=ground.width/2;
  ground.velocityX=-4;
  console.log(ground.x);
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background(220);
  stroke("black");
  textSize(15);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  if (keyDown("space")) {
   monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY+0.9;
  
  if (ground.x<0) {
  ground.x=ground.width/2;
  }

  monkey.collide(ground);
  drawSprites();
  
  Banana();
  Obstacles();
}

function Banana() {
  if (frameCount%80===0) {
    banana = createSprite(400,Math.round(random(120,200)),20,20);
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.1;
    banana.lifetime=150;
    FoodGroup.add(banana);
  }
}

function Obstacles() {
  if (frameCount%300===0) {
    obstacle = createSprite(400,325,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle);
  }
}




