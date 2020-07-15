var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 100, 100, 50);
  movingRect = createSprite(200,300,50,100);
  fixedRect.shapeColor = "limeGreen";
  movingRect.shapeColor = "Orange";
  movingRect.debug = true;
  fixedRect.debug = true;
  sprite1=createSprite(100,200,100,100)
  sprite1.shapeColor="purple";
}

function draw() {
  background(0,0,0);
  
  console.log(movingRect.x-fixedRect.x);



  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
if(isTouching(sprite1,movingRect)){
  movingRect.shapeColor = "red";
    sprite1.shapeColor = "blue";
}
  else{
    movingRect.shapeColor = "Orange";
    sprite1.shapeColor = "purple";
  }


  drawSprites();
}

