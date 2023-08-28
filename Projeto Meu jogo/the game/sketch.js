const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, angle
var canvas;
var backgroundImage, dero1_img, enemy_img, backgroundImage2;
var database, gameState;
var form, player, playerCount;
var allPlayers, dero1, dero2, enemy;
var dero = [];
var Fireballs = [];
function preload() {
  backgroundImage = loadImage("./assets/Café.png");

  dero1_img= loadImage("./assets/personagem(DIREITA).png");
  backgroundImage2 = loadImage("./assets/Minimapa.png");
  enemy_img = loadImage("./assets/Enemytest.png");
  fireballimage = loadImage("./assets/boladefogodireita.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  start();
}

function draw() {
  background(backgroundImage);
  
keyPressed()
  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function start()
 {
  form = new Form();
form.display();


dero1 = createSprite();
dero1.addImage("dero1", dero1_img);
dero1.scale = 1

enemy = createSprite(width / 2 - 100, height - 100);
enemy.addImage("enemy", enemy_img);
enemy.scale = 1
if (keyCode === 32) {
  Fireballs = createSprite(
    player.positionX,player.positionY,20,20);
  Fireballs.addImage("difficult",fireballimage);
  Fireballs.scale = 1
}


dero = [dero1];
}