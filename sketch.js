var spriteM, spriteF;

function setup() {
  createCanvas(800,400);
  spriteF=createSprite(400, 200, 100, 50);
  spriteF.shapeColor="powderblue";
  spriteF2=createSprite(100, 100, 100, 50);
  spriteF2.shapeColor="green";
  spriteF3=createSprite(500, 100, 100, 50);
  spriteF3.shapeColor="yellow";
  spriteM=createSprite(700,200,100,50);
  spriteM.shapeColor="aqua";
  




}

function draw() {
  background(20,25,35);
  
  console.log(spriteM.y-spriteF.y);
  spriteM.x=World.mouseX;
  spriteM.y=World.mouseY;
  

  
  
  

     
if (isTouch(spriteM,spriteF3)){
  spriteM.shapeColor="red";
  spriteF3.shapeColor="blue";
}

else {
  spriteM.shapeColor="aqua";
  spriteF3.shapeColor="yellow";
}
  drawSprites();
}
