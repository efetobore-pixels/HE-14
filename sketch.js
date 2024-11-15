let backgroundImage; 
let imgArray = []; 
let player1, player2, ball, post;

function preload() {
  backgroundImage = loadImage("pitch.png");
  player1 = loadImage("red_player.png");
  player2 = loadImage("white_player.png");
  ball = loadImage("ball.png");
  post = loadImage("post.png");

  imgArray = [player1, player2];
}

function setup() {
  let canvas = createCanvas(500, 700);
  canvas.parent("sketch-holder");
  background(backgroundImage);
  
  let button1 = createButton("ball");
  button1.parent("button-holder");
  button1.mousePressed(drawBall);
  
  let button2 = createButton("Random Player");
  button2.parent("button-holder");
  button2.mousePressed(drawRandomPlayer);
  
  let button3 = createButton("Clear Screen");
  button3.parent("button-holder");
  button3.mousePressed(clearScreen);
  
  rectMode(CENTER);
}

function draw() {}

function drawBall() {
  let x = random(width);
  let y = random(height);
  image(ball, x, y, 32, 32);
}

function drawRandomPlayer() {
  let randomImg = random(imgArray);
  let x = random(width);
  let y = random(height);
  image(randomImg, x, y, 35, 48);
}

function mousePressed() {
  image(post, mouseX, mouseY, 90, 90);
}

function clearScreen() {
  background(backgroundImage);
}
