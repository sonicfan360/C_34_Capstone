const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;

var ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var wreck1
var string1
function setup() {
  createCanvas(800,800);
  
 engine = Engine.create();
 world = engine.world;
 ground1 = new ground(width/2, height-10, 800,10);
 box1 = new box(500,200,70,70);
 box2 = new box(500,200,70,70);
 box3 = new box(500,200,70,70);
 box4 = new box(500,200,70,70);
 box5 = new box(500,200,70,70);
 box6 = new box(600,200,70,70);
 box7 = new box(600,200,70,70);
 box8 = new box(600,200,70,70);
 box9 = new box(600,200,70,70);
 box10 = new box(600,200,70,70);
 wreck1 = new wrecking_ball(100,200,100);
 string1 = new chain(wreck1.body,{x:200,y:100})
 

}


function draw() {
  background(100,255,35);  
  Engine.update(engine)
 ground1.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 wreck1.display();
 string1.display();

}
function mouseDragged() {
  Matter.Body.setPosition(wreck1.body,{x:mouseX,y:mouseY}) 
}
