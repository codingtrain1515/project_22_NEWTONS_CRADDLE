const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

roof = new Roof(450,100,300,20);
bob = new Bob(350,400,50);
bob1 = new Bob(400,400,50);
bob2  =new Bob(450,400,50);
bob3 = new Bob(500,400,50);
bob4 = new Bob(550,400,50);

chain = new Chain (bob.body,{x:350,y:100});
chain1 = new Chain(bob1.body,{x:400,y:100});
chain2 = new Chain(bob2.body,{x:450,y:100});
chain3 = new Chain(bob3.body,{x:500,y:100});
chain4 = new Chain(bob4.body,{x:550,y:100});

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");


//call display() to show ropes here
chain.show();
chain1.show();
chain2.show();
chain3.show();
chain4.show();
 
  //create ellipse shape for multiple bobs here
  bob.show();
  bob1.show();
  bob2.show();
  bob3.show();
  bob4.show();
  roof.show();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
if(keyCode === 	UP_ARROW){
Matter.Body.applyForce(bob.body,bob.body.position,{x:-55,y:155})
}
}