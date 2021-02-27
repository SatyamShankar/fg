
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber,stone,plane,hammer


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   rubber = new Rubber(400,110,20)

 hammer = new Hammer(300,140,60,20)

 plane = new Plane(350,400,500,500)

 stone = new Stone(500,100,100,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

 rubber.display()
 hammer.display(
 )
plane.display()

stone.display()



  drawSprites();
 
}



