const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var dust;
var engine,world;
let img;
function preload(){
    img = loadImage("dustbingreen.png");
    img.scale=0.5;
    imageMode(CENTER);
}

function setup() {
  
   var canvas = createCanvas(900,600);
   engine = Engine.create();
   world = engine.world;   
   
   ground = new Ground(450,595,900,10);
   
   paper = new Paper(200,200,50,50);
   bin1 = new Bin(800,450,10,100);
   
}


function draw() {
    background("white");
    Engine.update(engine);

    ground.display();
    bin1.display();
       
    paper.display();
    image(img,650,450);
}


function keyReleased() {
    if(keyCode===32){
        paper.body.position.x=-2;
        paper.body.position.y=4;
    }
}