
var bg1,as,s;

var bg1_img,r_img,s_img;
var gameState = 0;
var form,game;
function preload(){
  bg1_img = loadImage("G.jpg");
  s_img = loadImage("space2.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 // s = createSprite(0, 0, 400, 400);
game = new Game();
game.start();
 //s.addImage(s_img);
}

function draw() {
  background(0);  
  if(gameState === 0)
  {
    game.start();
   
  }
 if (gameState === 1)
{
  
  game.play();
}
  //drawSprites();
}