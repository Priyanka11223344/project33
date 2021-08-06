var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var drops = [];
var bgimg;


function preload(){
bgimg = loadImage("snow1.jpg");
}



function setup() {
    createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;

  
   
}
 
function draw() {
  background(bgimg);
  Engine.update(engine);
  
  if(frameCount%10===0){
    drops.push(new Snowfall(random(width/2-10,width/2+10),10,10));
   }

   for (var i = 0; i < drops.length; i++) {
    drops[i].display();   
  }

  }