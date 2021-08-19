var bg,bgImg;
var player;
var warlock, titan, hunter;
var warlockS, titanS, hunterS;


function preload(){
  
  

  bgImg = loadImage("bg begining.jpg")
  warlock = loadImage("Warlock.PNG")
  titan = loadImage("Titan.PNG")
  hunter = loadImage("Hunter.PNG")
  warlockS = loadImage("WarlockShooting.PNG")
  titanS = loadImage("Titanshooting.PNG")
  hunterS = loadImage("Huntershooting.PNG")
}

function setup() {

  
  createCanvas(1500,1040);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(warlock)
   player.scale = 0.3
   
   player.setCollider("rectangle",0,0,300,300)
  

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-5
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+5
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  player.x = player.x-5
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
 player.x = player.x+5
}


if(keyWentUp("C")){
 
  player.addImage(hunter)
 
}
if(keyWentUp("V")){
 
  player.addImage(titan)
 
}
if(keyWentUp("B")){
 
  player.addImage(warlock)
 
}
if(keyWentDown("B") ){
 
  player.addImage(warlockS)
 
}
if(keyWentDown("V")){
 
  player.addImage(titanS)
 
}
if(keyWentDown("C")){
 
  player.addImage(hunterS)
 
}

drawSprites();

}
