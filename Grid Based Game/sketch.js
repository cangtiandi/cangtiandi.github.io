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
let gridWidth = 30;
let gridHeight = 30;
let cellHeight, cellWidth;

let curTetromino = [];
let startX = 23;
let startY = 0;

// load the images
function preload() {
  logo = loadImage("assets/Pictures/Title/Tetris.png");
}


function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  
  // adjusting image and angle
  angleMode(DEGREES);
  imageMode(CENTER);

  // Start menu
  drawButton = createButton("start");
  drawButton.position(width/2-100,height/2);
  drawButton.mouseClicked(enterTetris);
  drawButton.size(100,100);

  image(logo, width/2-50, (height-a*8)-50, 200, 120);

  // grid 
  grid = createEmpty2DArray(gridHeight,gridWidth);
  cellHeight = height/gridHeight;
  cellWidth = width/gridWidth;

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
  for (let y=0; y<gridHeight; y++){
    for (let  x=0; x< 12; x++){
      if(grid[y][x] === 0){
        grid[y][x] = 1;
      }
    }
  }

  for (let y=0; y<gridHeight; y++){
    for (let  x=19; x<gridWidth; x++){
      if(grid[y][x] === 0){
        grid[y][x] = 1;
      }
    }
  }
}

function displayGrid(){
  let cellWidth = width/gridWidth;
  let cellHeight = height/gridHeight;
  
  for (let y=0; y<gridHeight; y++){
    for (let x=0; x<gridWidth; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      if (grid[y][x] === 1){
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight)
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

function CreateTetrominos(){
  // Push T 
  tetrominos.push([[1,0], [0,1], [1,1], [2,1]]);
  // Push I
  tetrominos.push([[0,0], [1,0], [2,0], [3,0]]);
  // Push J
  tetrominos.push([[0,0], [0,1], [1,1], [2,1]]);
  // Push Square
  tetrominos.push([[0,0], [1,0], [0,1], [1,1]]);
  // Push L
  tetrominos.push([[2,0], [0,1], [1,1], [2,1]]);
  // Push S
  tetrominos.push([[1,0], [2,0], [0,1], [1,1]]);
  // Push Z
  tetrominos.push([[0,0], [1,0], [1,1], [2,1]]);
}