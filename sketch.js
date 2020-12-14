
var monkey , monkey_running
var banana ,bananaImage,bananaGroup 
var obstacle, obstacleImage,obstacleGroup
var ground
var score
var survivalTime

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,200);
  
  monkey = createSprite(20,100,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
    ground = createSprite(200,180,400,20);
    ground.velocityX=-3;
    ground.x = ground.width /2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}

function draw() {
background(180);
  
  if(keyDown("space" )) {
  monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("score:"+score,500,50);
  
  stroke("black");
  textSize(15);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
   if (ground.x < 0){
   ground.x = ground.width/2;
   }
  
  food();
  obstacles();
  
  drawSprites();
}

 function food(){
  if (frameCount % 80 === 0){
  var banana= createSprite(120,20,10,10);
    banana.scale=0.1;
  banana.y = Math.round(random(50,100));
  banana.addImage(bananaImage);
  banana.velocityX=-3;
  banana.lifetime=200;
    
  bananaGroup.add(banana)
    
  }
}

 function obstacles(){
   if (frameCount % 300 ===0 ){
  obstacle= createSprite(180,150,30,30);
  obstacle.scale=0.1;
  obstacle.addImage(obstacleImage);
  obstacle.vlocityX=-6;
  obstacle.lifetime=300;
     
  obstacleGroup.add(obstacle)
   }
 }