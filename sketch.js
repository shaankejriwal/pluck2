
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine,world;
var ground,tree,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var tree1,stone;

function setup() {
	createCanvas(1200, 450);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,height,1200,20);

  tree1 = new Tree(1000,300,400,400);

  mango1 = new Mango(1050,300,30,15);
  
  mango2 = new Mango(900,300,30,15);

  mango3 = new Mango(1110,300,30,15);

  mango4 = new Mango(1100,300,30,15);

  mango5 = new Mango(1100,300,30,15);

  mango6 = new Mango(1050,300,30,15);

  mango7 = new Mango(1050,300,30,15);

  mango8 = new Mango(1200,300,30,15);

  boy = new Boy(200,400,100,100);

  stone = new Stone(400,300,15,30);

  slingshot = new SlingShot(stone.body,{x:200, y:350});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  boy.display();
  stone.display();

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


