var bgimage;
var mimage;
var mario;
var trex,timage;
var edges;
var bullet,bimage;

function preload(){
  bgimage = loadImage("background.jpg");
  mimage = loadImage("mario.png");
  timage = loadImage("trex.png");
  bimage = loadImage("bullet.jpg");
}
function setup() {
  
  createCanvas(800,600);
  mario = createSprite(200, 400, 50, 50);
  mario.addImage("mario",mimage);
  mario.velocityX=3;
  trex = createSprite(600, 200, 50, 50);
  trex.addImage("bird",timage);
  trex.scale=0.2;
  trex.velocityY=2;
  

  bullet = createSprite(280,360,10,10);
  bullet.addImage("bullet",bimage);
  //bullet.setCollider("rectangle",0,0,10,10);
  bullet.scale=0.1;
 
  edges=createEdgeSprites();
 // if(keyDown("UP_ARROW")){
  //  bullet.velocityX = 10;
 //}
}

function draw() {
  background(bgimage); 
  bullet.x=mario.x;
  if (keyCode === 32) {
    bullet.velocityX = 10;
    
  }
  if(mario.x < 50){
    mario.velocityX = 3;
  }
  if(mario.x > 650){
    mario.velocityX = -3
  }

  drawSprites();
  createEdgeSprites();
  trex.bounceOff(edges);
  mario.bounceOff(edges);
 
}