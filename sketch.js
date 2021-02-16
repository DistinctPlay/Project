var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor(80,80,80);
  car.velocityX = speed;
     if(car.istouching(wall)){
      var deformation = (0.5*weight*speed*speed)/22500
      car.velocityX = 0
   if(deformation<100){
     car.shapeColor(0,255,0)
   }
   if(deformation<180 && deformantion>100){
     car.shapeColor(230,30,0)
   }
   if(deformation>180){
    car.shapeColor(255,0,0)
   }
  }
}

function draw() {
  background(255,255,255);  
  drawSprites();
}