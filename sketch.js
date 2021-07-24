var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leafImage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x= World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples();
  spawnLeafs();
  drawSprites();
}

function spawnApples(){
if (frameCount%50==0){
apple = createSprite(random(10,300),10,10,10)
apple.addImage(appleImage)
apple.velocityY = 3
apple.scale=0.05
apple.lifetime = 200

}
}

function spawnLeafs(){
  if (frameCount%80==0){
  leaf = createSprite(random(10,300),10,10,10)
  leaf.addImage(leafImage)
  leaf.velocityY = 3
  leaf.scale=0.05
  leaf.lifetime = 200
  
  }
  }