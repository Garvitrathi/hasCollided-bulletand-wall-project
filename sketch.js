var wall,thickness;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
   
  thickness = random(22,83);

  bullet = createSprite(10, 200, 30, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = 11;

  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color("brown");

  speed = random(223,321);

  weight = random(30,52);
  
}

function draw() {
  background("black"); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5* speed* weight*speed/(thickness*thickness*thickness);

     if(damage>10){
       wall.shapeColor = color(255,0,0);
     }

     if(damage<10){
       wall.shapeColor = color(0,255,0)
     }
  }
  
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
  } 
    return false;
}