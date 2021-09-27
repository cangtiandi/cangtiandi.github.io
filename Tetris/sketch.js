// Project Title

// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global varibles 
let x = 150;
let y = 300;
let drawButton;

// load the images
function preload() {
  logo = loadImage("assets/Pictures/Title/Tetris.png");
  blueL = loadImage("assest/Pictures/Blocks/Blue Ricky.png");
  redZ = loadImage("assest/Pictures/Blocks/Cleveland Z.png");
  Lblock = loadImage("assest/Pictures/Blocks/Hero.png");
  orangeL = loadImage("assest/Pictures/Blocks/Orange Ricky.png");
  greenZ = loadImage("assest/Pictures/Blocks/Rhode Island Z.png");
  block = loadImage("assest/Pictures/Blocks/Smashboy.png");
  tBlock = loadImage("assest/Pictures/Blocks/Teewee.png");
}

function setup() {
  background(255);
  createCanvas(400, 400);
  
  // creating and customizing the button
  drawButton = createButton("start");
  drawButton.position(x,y);
  drawButton.mouseClicked(enterTetris);
  drawButton.size(width/4,height/8);
  
  
  image(logo, x, 30, 100, 60);
}

function draw() {
  image(random());
}
  

function enterTetris(){
  background(0);
  drawButton.remove();
}

function game(){

}