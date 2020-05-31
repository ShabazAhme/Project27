var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

    engine = Engine.create();
	  world = engine.world;
 
    roof = new Roof(400,100,700,50);	

	  bobObject1 = new Bob(300,400,50,50);
    bobObject2 = new Bob(350,400,50,50);
    bobObject3 = new Bob(400,400,50,50);
    bobObject4 = new Bob(450,400,50,50);
    bobObject5 = new Bob(500,400,50,50);                                                                       
    rope1 = new Rope(bobObject1.body,roof.body,0,0);
    rope2 = new Rope(bobObject2.body,roof.body,0,0);
    rope3 = new Rope(bobObject3.body,roof.body,0,0);
    rope4 = new Rope(bobObject4.body,roof.body,0,0);
    rope5 = new Rope(bobObject5.body,roof.body,0,0);
    
    Engine.run(engine);
  
}

           
function draw() {
  rectMode(CENTER);
  background("white");
   
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:85,y:-85})
	}
}

