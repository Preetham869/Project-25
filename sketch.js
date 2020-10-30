const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbinObj,groundObject,paperObject;

function setup() {
 
 createCanvas(800,600);
 rectMode(CENTER);
 
 engine = Engine.create();
 world = engine.world;
 
 paperObject = new Paper(80,430,70)
 groundObject = new Ground(50,500,1500,10)
 dustbinObj = new Dustbin(600,410,150,160)
 
 Engine.run(engine);
 
 }

 function draw() {
 
 background("white");  
 Engine.update(engine);
 
 groundObject.display();
 dustbinObj.display();
 paperObject.display();
 

 }


 function keyPressed(){

 if(keyCode === UP_ARROW) {

 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-115})

 }

 }

 function isTouching(){

 if(paperObject.isTouching(dustbinObj)){

 World.add(world,dustbinObj)

 }

 }