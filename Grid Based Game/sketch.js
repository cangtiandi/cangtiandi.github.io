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

  block = loadImage("assets/Pictures/Tetris Blocks/TetrisBlock.png");
  black = loadImage("assets/Pictures/Tetris Blocks/Black.png");
  white = loadImage("assets/Pictures/Tetris Blocks/White.png");
}


function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  
  // adjusting image and angle
  angleMode(DEGREES);
  imageMode(CENTER);

  // Start menu
  drawButton = createButton("start");
  drawButton.position(width/2-50,height/2);
  drawButton.mouseClicked(enterTetris);
  drawButton.size(100,100);

  image(logo, width/2-50, -height+a*2, a, 60);

  // grid 
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

function displayGrid(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
  
  for (let y=0; y<gridSize; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 0){
        image(white, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1){
        image(black, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[x][y] === 2){
        image(block, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
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

