var starImg,bgImg;
var star, starBody;
var fairyImg,fairy,sound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//load animation for fairy here
	sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    sound.play();

	//create fairy sprite and add animation for fairy
    fairy = createSprite(150,500,40,40);
	fairy.addAnimation("fairyRunning",fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	fairy.debug=false;
	fairy.setCollider("rectangle",100,90,760,100)
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairy.velocityX=0;
  fairy.velocityY=0;
  
  Engine.update(engine);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  keyPressed();

  //write code to stop star in the hand of fairy
  if (star.isTouching(fairy)){
      Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyDown("RIGHT_ARROW")){
		fairy.velocityX=3;
   }

    if (keyDown("LEFT_ARROW")){
	fairy.velocityX=-3;
   }
}
