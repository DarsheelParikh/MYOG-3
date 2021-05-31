function preload(){
spaceshipImg = loadImage("rocketship.png")
enemyshipImg = loadImage("enemyship.png")
backgroundImg = loadImage("spacebackground.png")
}
function setup() {
  createCanvas(1000,1000);
  background = createSprite(400,200,1000,1000)
 background.addImage(backgroundImg)
background.scale = 3
spaceship = createSprite(450,600,20,20)
spaceship.addImage(spaceshipImg)
spaceship.scale = 1
enemyship = createSprite(450,150,20,20)
enemyship.addImage(enemyshipImg)
enemyship.scale = 1
}

function draw() {
  spaceship.velocityX = 0
  spaceship.velocityY = 0
  enemyship = spaceship.x
  if(keyDown("Right_Arrow")){
    spaceship.velocityX = 3
  }
  if(keyDown("Left_Arrow")){
    spaceship.velocityX = -3
  }

  drawSprites();
}