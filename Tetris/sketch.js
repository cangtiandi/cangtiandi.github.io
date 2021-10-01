/* eslint-disable no-undef */
// Project Title
// 
// Your Name
//
// Date
// 9/28/21
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global varibles 
let x = 150;
let y = 300;
let blueL, redZ, lBlock, orangeL, greenZ, block, tBlock;
let tetrisBlocks = [blueL, redZ, lBlock, orangeL, greenZ, block, tBlock]
let randomTetrisBlocks = tetrisBlocks[Math.floor(Math.random() * tetrisBlocks.length)]

// load the images
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
  
  // creating and customizing the button
  drawButton = createButton("start");
  drawButton.position(x,y);
  drawButton.mouseClicked(enterTetris);
  drawButton.size(width/4,height/8);
  
  // adjusting image and angle
  angleMode(DEGREES);
  imageMode(CENTER);

  image(logo, width/2, 30, 100, 60);
}

function draw() {
 rotation()
}
  
function enterTetris(){
  background(0);
  drawButton.remove();
  image(randomTetrisBlocks, width/2, 30, 100, 60);
}

function rotation(){

}