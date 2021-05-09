var floor,floorImg

function preload(){
  floorImg = loadImage("floor.jpg");

}


function setup() {
  
  createCanvas(1200,600); 

  floor = createSprite(600,300,1200,600);
  floor.addImage(floorImg);
  floor.scale = 6.5;
}

function draw() {
  background(0);  

  drawSprites();
}