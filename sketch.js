var sun,murcury,venus,earth,mars;

var sunImage,murcuryImage,VenusImage,earthImage,marsImage;
var angle = 0;
function preload(){
sunImage = loadImage('sun.png');
murcuryImage = loadImage('murcury.png');
venusImage = loadImage('venus.png');
earthImage = loadImage('earth.png');
marsImage = loadImage('mars.png');

}

function setup() {
  
  createCanvas(1200,1000);
//creating sun
  sun = createSprite(0,0,10,10);
  sun.addImage(sunImage);
  sun.setCollider("circle",0,0,sun.width/2);
  //sun.debub = true;
  sun.scale = 0.2;
//creating planets
  murcury = createSprite(340, 260, 50, 50);
  murcury.setCollider("circle",0,0,murcury.width/2);
  murcury.addImage(murcuryImage);
  murcury.scale = 0.22;
 // murcury.debug = true;

  Venus = createSprite(500,260,50,50);
  Venus.addImage(venusImage);
  Venus.setCollider("circle",0,0,Venus.width/2);
  Venus.scale = 0.15;
  //Venus.debug = true;

  earth = createSprite(740,260,50,50);
  earth.addImage(earthImage);
  earth.setCollider("circle",0,0,earth.width/2);
  earth.scale = 0.14;
  //earth.debug = true;
  
  mars = createSprite(940,260,50,50);
  mars.addImage(marsImage);
  mars.setCollider("circle",0,0,mars.width/2);
  mars.scale = 0.15;
  
  //mars.debug = true;
}

function draw() {
  background(2);  
  if(frameCount%2==0){
    sun.scale=sun.scale+0.001
  }
  if (sun.collide(murcury)) {
    murcury.destroy();
  }
  if (sun.collide(Venus)) {
   Venus.destroy();
  }
  if (sun.collide(earth)) {
   earth.destroy();
  }
  if (sun.collide(mars)) {
   mars.destroy();
  }
  translate(width/2,height/2);
 rotate(angle);
 angle= angle+0.3;



  drawSprites();
}