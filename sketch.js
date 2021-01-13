var PLAY = 1;
var END = 0;
var gameState = PLAY;

var warrior,warrior_running,warrior_Stopped;
var ground, invisibleGeound , groundImage ;

var ObstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4;

var score = 0

var gameOver, restart;

function preload(){
  warrior_running = loadAnimation("");
  warrior_Stopped = loadAnimation("");

  groundImage = loadImage("");

  obstacle1 = loadImage("");
  obstacle2 = loadImage("");
  obstacle3 = loadImage("");
  obstacle4 = loadImage("");

  gameOverImg = loadImage("");
  restartImg= loadImage("restart.png");

}
function setup() {
  createCanvas(600,200);

  warrior = createSprite(50,180,20,50);

  warrior.addAnimation("Running");
  warrior_Stopped.addAnimation("Stopped");
  warrior_Stopped.scale=0.5;

  ground = createSprite(200,180,400,20);
}