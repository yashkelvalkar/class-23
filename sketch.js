const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, b1, b2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new G(200,380,400,20);
    b1 = new B(200,300,50,50);
    b2 = new B(240,100,50,100);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    b1.display();
    b2.display();
}