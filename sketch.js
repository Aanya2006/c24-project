var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
	
	paper=new Paper()
	dustbin=new Dustbin(500,640,100,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(ground.position.x,ground.position.y,width,10);
  paper.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-13})
	 }
   }



