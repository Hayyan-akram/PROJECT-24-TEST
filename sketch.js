const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	box1 = new Dustbin(550,520,40,130);
	box2 = new Dustbin(650,520,40,130);
	box3 = new Dustbin(600,520,70,40);

	ground = new Ground(300,height,1000,20);

	paper = new Paper(200,520,20,20)


	Engine.run(engine);
  
}


function draw() {
background(0);
	box1.display();
	box2.display();
	box3.display();
	ground.display();
	paper.display();
  rectMode(CENTER);
  
  
  drawSprites();
 
}



