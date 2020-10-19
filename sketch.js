var fixedRect, movingRect, gameObject1, gameObject2,gameObject3,gameObject4; 

function setup() {

  createCanvas(800,800);
  
  fixedRect=createSprite(400, 400, 50, 100);
  fixedRect.shapeColor="green";
  movingRect=createSprite(200,200,100,50);
  movingRect.shapeColor="green";

  gameObject1=createSprite(100, 200, 50, 100);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200, 200, 50, 100);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300, 200, 50, 100);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400, 200, 50, 100);
  gameObject4.shapeColor="green";
}


function draw() {
  background(0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  console.log(movingRect.x-fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);

  if(isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="blue";
    movingRect.shapeColor="red";  
 }
 else {
  gameObject1.shapeColor="green";
  movingRect.shapeColor="green";
 }

 
 drawSprites();

}

