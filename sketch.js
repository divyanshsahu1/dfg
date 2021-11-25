const Engine= Matter.Engine
const World= Matter.World
const Bodies=Matter.Bodies

var bg,ground
var santa,simg,santarunnig,sleftrun,standim,jumpim
//var santawalk,santawalkim

var engine,world
var p=400
var l=350
function preload() {

bg=loadImage("snow1.jpg")
simg=loadAnimation("run/run1.png","run/run2.png","run/run3.png","run/run4.png","run/run5.png","run/run6.png",)
//santawalkim=loadAnimation("walk/walk1.png","walk/walk2.png","walk/walk3.png","walk/walk4.png")
sleftrun=loadAnimation("leftrun/leftrun1.png","leftrun/leftrun2.png","leftrun/leftrun3.png","leftrun/leftrun4.png","leftrun/leftrun5.png","leftrun/leftrun6.png")
standim=loadImage("stand.png")
jump=loadAnimation("jump/jump1.png","jump/jump2.png","jump/jump3.png")
}
function setup() {
  engine= Engine.create()
  world=engine.world
 createCanvas(800,400);
ground=createSprite(400, 350, 850, 20);
ground.visible=false
santa=createSprite(p,l);
santa.addImage("stand",standim)
//santa.visible=false
santa.scale=0.5
santa.addAnimation("left",sleftrun)
santa.addAnimation("right",simg)
}

function draw() {
  background(bg);  
  Engine.update(engine);

  
 santa.collide(ground)
 
  drawSprites();
}
function keyPressed(){
  if( keyDown("RIGHT_ARROW")){
    santa.changeAnimation("right",simg)
      santa.velocityX=2

   }
   else {
    
    santa.changeImage("stand",standim)
      santa.velocityX=0
      
    }
    
  
    if( keyDown("LEFT_ARROW")){
      
      santa.changeAnimation("left",sleftrun)
      santa.velocityX=-4
     
      {
        santa.changeImage("stand",standim)
        santa.velocityX=0
        
      } 
    }


}
