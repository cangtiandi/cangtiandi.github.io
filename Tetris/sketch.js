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
  logo = loadImage("C:\Users\1302239\Documents\GitHub\cangtiandi.github.io\Pictures\Title");
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
  
}
  

function enterTetris(){
  background(0);
  drawButton.remove();
}