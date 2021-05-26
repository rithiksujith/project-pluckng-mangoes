
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	treeIMG = loadImage("tree.png");
	stoneIMG = loadImage("stone.png");
	boyIMG = loadImage("boy.png");
	mangoIMG = loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	Mango1 = createSprite(200,400)
	Mango2 = createSprite(250, 600)
	Mango3 = createSprite(309,534)
	Mango4 = createSprite(668,700)
	Mango5 = createSprite(599,648)

	Mango1.display();
	Mango2.display();
	Mango3.display();
	Mango4.display();
	Mango5.display();


	detectCollision(stoneObj, Mango1);
	detectCollision(stoneObj, Mango2);
	detectCollision(stoneObj, Mango3);
	detectCollision(stoneObj, Mango4);
	detectCollision(stoneObj, Mango5);

  drawSprites();
}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
	stone.fly();
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, soneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
    }
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, { x: 235, y: 420 })
		launcherObject.attatch(stoneObj.body);
    }
}



