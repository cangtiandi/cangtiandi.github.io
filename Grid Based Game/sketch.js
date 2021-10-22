/* eslint-disable no-undef */
// Project Title
// Grid Based Game 
// Your Name
// Jack Chen 
// Date
// 10/19/21
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// 

//global varibles 
let a = 100;
let y = 300;
let theta = 0;
let tetris = false;

let grid;
let gridSize = 30;
let cellHeight, cellWidth;

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
  drawButton.size(100,100);

  image(logo, width/2, -height, a, 60);
  
  // adjusting image and angle
  angleMode(DEGREES);
  imageMode(CENTER);


  grid = createEmpty2DArray(gridSize,gridSize);
  cellHeight = height/gridSize;
  cellWidth = width/gridSize;

  tetrisBackground();
}

function draw() {
  if (tetris){
    tetrisMode();
  }
}

// activates tetrisMode()
function enterTetris(){
  tetris = !tetris;
}

function tetrisMode() {
  drawButton.remove();
  displayGrid();
}

function tetrisBackground(){
  for (let y=0; y<gridSize; y++){
    for (let  x=0; x< 12; x++){
      if(grid[y][x] === 0){
        grid[y][x] = 1;
      }
    }
  }

  for (let y=0; y<gridSize; y++){
    for (let  x=20; x<gridSize; x++){
      if(grid[y][x] === 0){
        grid[y][x] = 1;
      }
    }
  }
}

// rotation
function keyTyped() {
  let switchSound = new Audio("assets/Audio/Block Rotate.mp3");
  if (key === "d") {
    theta += 90;
    switchSound.play();
  }
  if (key === "a"){
    theta -= 270;
    switchSound.play();
  }
}

function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  
  for (let y=0; y<gridSize; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      else if (grid[y][x] === 1){
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows,cols){
  let grid = [];
  for (let y=0; y<rows; y++){
    grid.push([]);
    for (let x=0; x<cols; x++){
      grid[y].push(0);
    }
  }
  return grid;
}

function createBlock(){
  for (let y=0; y<2; y++){
    for (let x=0; x<2; x++){
      if (grid[y][x])
    }
  }
  rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
}