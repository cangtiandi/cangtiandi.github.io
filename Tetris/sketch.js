/* eslint-disable no-undef */
// Project Title
// Interactive Scene
// Your Name
// Jack Chen 
// Date
// 9/28/21
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Added audio everytime you rotate

//global varibles 
let x = 150;
let y = 300;
let theta = 0;
let button = false;

// load the images(future use)
function preload() {
  logo = loadImage("assets/Pictures/Title/Tetris.png");
  blueL = loadImage("assets/Pictures/Blocks/Blue Ricky.png");
  redZ = loadImage("assets/Pictures/Blocks/Cleveland Z.png");
  lBlock = loadImage("assets/Pictures/Blocks/Hero.png");
  orangeL = loadImage("assets/Pictures/Blocks/Orange Ricky.png");
  greenZ = loadImage("assets/Pictures/Blocks/Rhode Island Z.png");
  block = loadImage("assets/Pictures/Blocks/Smashboy.png");
  tBlock = loadImage("assets/Pictures/Blocks/Teewee.png");
}


function setup() {
  background(255);
  createCanvas(400, 400);
  
  // Start menu
  drawButton = createButton("start");
  drawButton.position(x,y);
  drawButton.mouseClicked(a);
  drawButton.size(width/4,height/8);

  image(logo, width/2, 30, 100, 60);
  
  // adjusting image and angle
  angleMode(DEGREES);
  imageMode(CENTER);

}

function tetrisMode() {
  background(0);
  drawButton.remove();

  // rectangle(temporay)
  translate(200,200)
  rotate(theta);
  rectMode(CENTER);
  rect(0, 0, 50, 100);
}

function draw() {
  if (button){
    tetrisMode();
  }
}

// rotation
function keyTyped() {
  if (key === "d") {
     theta += 90;
  }
}

function a(){
  button = !button;
}