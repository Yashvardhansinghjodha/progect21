var path,player;
var pathImg,mainPlayerImg;

var obb1,obb2Img, obb;
var obb3Img,obb4Img;
var obb4Img,obb5Img;
var gameOverImg

var pinkCG, yellowCG,redCG; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;



function preload(){
  pathImg = loadImage("Road.png");
  mainPlayerImg = loadAnimation("giphy.gif");
  
   obb1 = loadAnimation("download.jpg");
   
   obb2 = loadAnimation("images-1.jpg");

   obb3 = loadAnimation("images.jpg");
  
  //  obb4 = loadAnimation("images-2.jpg");

  //  obb5 = loadAnimation("images.png");
  
   cycleBell = loadSound("bell.mp3");

   gameOverImg = loadImage("gameOver.png");
}

function setup(){
  
createCanvas(1200,300);

path = createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;


player  = createSprite(110,230);
player.addAnimation("giphy.gif",mainPlayerImg);
player.scale=0.5;
  

player.setCollider("rectangle",0,0,40,40);

  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
  
purpleCG = new Group();
blueCG = new Group();
redCG = new Group();
blue2CG = new Group();
  
}

function draw() {
  background("white");
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
   player.y = World.mouseY;
  
   edges= createEdgeSprites();
   player.collide(edges);
  

  if(path.x < 0 ){
    path.x = width/2;
  }
  
    
   obb = Math.round(random(1,4));
  
  if (World.frameCount % 1 == 0) {
    if (obb1 == 1) {
      purpleCarists();
    } else if (obb2 == 2) {
      blueCarlists();
    } else if (obb3 == 3){
      blue2Cyclists();
    }
  }
  
   if(purpleCG.isTouching(player)){
     gameState = END;
     player.velocityY = 0;
  
    }
    
    if(blueCG.isTouching(player)){
      gameState = END;
      player.velocityY = 0;
      
    }
    
    if(redCG.isTouching(player)){
      gameState = END;
      player.velocityY = 0;
    }
    
}else if (gameState === END) {
    gameOver.visible = true;
  
    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);
  
    path.velocityX = 0;
    mainCyclist.velocityY = 0;
   
    pinkCG.setVelocityXEach(0);
    pinkCG.setLifetimeEach(-1);
  
    yellowCG.setVelocityXEach(0);
    yellowCG.setLifetimeEach(-1);
  
    redCG.setVelocityXEach(0);
    redCG.setLifetimeEach(-1);
   

     if(keyDown("UP_ARROW")) {
       reset();
     }
}
}

function pinkCyclists(){
        obb1 =createSprite(1100,Math.round(random(50, 250)));
        obb1.scale =0.06;
        obb1.velocityX = -(6 + 2*distance/150);
        obb1.addAnimation("obb1",oppPink1Img);
        obb1.setLifetime=170;
        purpleCG.add(obb1);
}

function yellowCyclists(){
        obb2 =createSprite(1100,Math.round(random(50, 250)));
        obb2.scale =0.06;
        obb2.velocityX = -(6 + 2*distance/150);
        obb2.addAnimation("obb2",oppYellow1Img);
        obb2.setLifetime=170;
        yellowCG.add(obb2);
}

function redCyclists(){
        obb3 =createSprite(1100,Math.round(random(50, 250)));
        obb3.setLifetime=170;
        obb3.scale =0.06;
        obb3.velocityX = -(6 + 2*distance/150);
        obb3.addAnimation("obb3",obbRed1Img);
        redCG.add(obb3);
}

function reset(){
  gameState = END;
  gameOver.visible = false;
  player.addAnimation("giphy.gif",player1);
  
  piCG.destroyEach();
  yellowCG.destroyEach();
  redCG.destroyEach();
  
  distance = 0;
 }



function reset(){
  gameState = PLAY;
 gameOver.visible = false;
  mainCyclist.addAnimation("giphhy.gif",mainRacerImg1);
  
 pinkCG.destroyEach();
  yellowCG.destroyEach();
  redCG.destroyEach();
  
  distance = 0;
 }

