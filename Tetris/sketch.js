/* eslint-disable no-undef */
// Project Title
// Interactive Scene
// Your Name
// Jack Chen 
// Date
// 9/28/21
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// Played a sound everyting you rotate the block

//global varibles 
let a = 100;
let y = 300;
let theta = 0;
let tetris = false;
let audio = new Audio("assets/Audio/Block Rotate.mp3");

// load the images
function preload() {
  logo = loadImage("assets/Pictures/Title/Tetris.png");
}


function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  
  // Start menu
  drawButton = createButton("start");
  drawButton.position(width/2,height/2);
  drawButton.mouseClicked(enterTetris);
  drawButton.size(a,a);

  image(logo, width/2, height-a, a, 60);
  
  // adjusting image and angle
  angleMode(DEGREES);
  imageMode(CENTER);

}

// activates tetrisMode()
function enterTetris(){
  tetris = !tetris;
}

function draw() {
  if (tetris){
    tetrisMode();
  }
}

function tetrisMode() {
  background(0);
  drawButton.remove();

  // rectangle(temporay)
  translate(200,200);
  rotate(theta);
  rectMode(CENTER);
  rect(0, 0, 50, 100);
}

// rotation
function keyTyped() {
  if (key === "d") {
    theta += 90;
    audio.play();
  }
  if (key === "a"){
    theta -= 270;
    audio.play();
  }
}

