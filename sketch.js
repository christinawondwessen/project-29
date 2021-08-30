const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  //level 1:
  box1 = new Box(270,275,30,40);
  box2 = new Box(300,275,30,40);
  box3 = new Box(330,275,30,40);
  box4 = new Box(360,275,30,40);
  box5 = new Box(390,275,30,40);
  box6 = new Box(420,275,30,40);
  box7 = new Box(450,275,30,40);
  //level 2:
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  //level 3:
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  //level 4:
  box16 = new Box(390,155,30,40);


  stand = new Ground(600,height,1200,20);
  //platform = new Ground(150, 305, 300, 170);

polygon = Bodies.circle(50,200,20);
World.add(world, polygon);

slingShot = new Slingshot(this.polygon{x:100,y:200});

}

function draw() {
  background(255,255,255);  
  drawSprites();

  box1.display();
  box12.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  function mouseDragged(){
    if (gamestate!=="launched") {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gamestate="launched";
}