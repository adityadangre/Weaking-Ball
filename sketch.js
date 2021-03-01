const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var b1,b2,b3,b4;
var b5,b6,b7;
var ball;
var chain;
var bg;

function preload(){
  bg=loadImage("bg.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,380,800,15);
  b1=new Building(600,330,60,60);
  b2=new Building(600,280,60,60);
  b3=new Building(600,220,60,60);
  b4=new Building(600,180,60,60);

  b5=new Building(500,330,60,60);
  b6=new Building(500,280,60,60);
  b7=new Building(500,220,60,60);
  ball=new Ball(200,200,15);
  chain=new Chain(ball.body,{x:200,y:200});
}

function draw() {
  background(bg);  
  Engine.update(engine);
  drawSprites();
  ground.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  ball.display();
  chain.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}