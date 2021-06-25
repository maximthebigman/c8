var fixedRect, movingRect;
var o1, o2, o3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  o1 = createSprite(800,200,80,30);
 o1.shapeColor = "green";
 o2 = createSprite(600,200,80,30);
  o2.shapeColor = "green";
  o3 = createSprite(400,200,80,30);
  o3.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  drawSprites();
 if (isTouching(movingRect,o1)){
  movingRect.shapeColor = "red";
  o1.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  o1.shapeColor = "green";
 }
 
 if (isTouching(movingRect,o2)){
  movingRect.shapeColor = "red";
  o2.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  o2.shapeColor = "green";
 }
 
 if (isTouching(movingRect,o3)){
  movingRect.shapeColor = "red";
  o3.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  o3.shapeColor = "green";
 }

 if (isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
}


