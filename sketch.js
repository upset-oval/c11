var run
var Pathimage
var leftboundary
var rightboundary
var Path
var boy
function preload(){
  //pre-load images
  run=loadAnimation("Runner-1.png","Runner-2.png")
  Pathimage=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  Edges = createEdgeSprites()
  
   Path = createSprite(200,200)
   boy = createSprite(200,350)
    Path.addImage(Pathimage)
    boy.addAnimation("run",run)
    boy.scale=0.1
    boy.collide(Edges)
    leftboundary = createSprite(0,0,100,800)
    rightboundary = createSprite(410,0,100,800)
    boy.collide(rightboundary)
    boy.collide(leftboundary)
}

function draw() {
  background(0);
boy.x=mouseX
drawSprites()
}
