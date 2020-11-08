const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, platform, chain, player, box1, box2, box3;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  platform = new Box(600, 200, 50, 10, true);

  player = new Box(100, 150, 30, 30, false);

  chain = new Chain(player.body, {x: 100, y: 200});

  box1 = new Box(600, 150, 40, 10, false);
  box2 = new Box(600, 130, 30, 10, false);
  box3 = new Box(600, 110, 20, 10, false);
}

function draw() {
  Engine.update(engine);
  background(0);  
  
  platform.display();

  player.display();

  chain.display();

  box1.display();
  box2.display();
  box3.display();
 
  //drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}