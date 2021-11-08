// Project Title
// Grid Based Game 
// Your Name
// Jack Chen
// Date
// 11/5/2021
// Extra for Experts:
// This whole game

let grid;
let gridSize = 30;
let cellWidth, cellHeight;

let goose;
let hasGoose = false;

let speedChecker = true;
let healthChecker = true;

let levels = 1; 
let score = 0;
let lives = 3;
let speed = 40;

let isGameOver = false;
let theGameOver;

function preload() {
  goose = loadImage("assets/Canadian Goose.png");
  theGameOver = loadImage("assets/Game Over.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  grid = createEmpty2DArray(gridSize,gridSize);
  theBackground();
}

function draw() {
  displayGrid();

  if (isGameOver === false){
    gooseMovement(); // spawns goose and moves it 
    gameSetting(); 
  }

  gameOver();
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

function displayGrid(){
  noStroke();
  for (let y=0; y<gridSize; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 0){
        fill("white");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1){
        fill("black");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 2){
        fill("#ADD8E6"); //light blue
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 3){
        fill("#008000");//green
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 4){
        fill("#6B4423"); // brown
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 5){
        image(goose, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function theBackground() {
  for (let y=0; y< 23; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 0){
        grid[y][x] = 2;
      }
    }
  }

  for (let y=23; y<gridSize; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 0){
        grid[y][x] = 3;
      }
    }
  }
  for (let y=28; y< gridSize; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 3){
        grid[y][x] = 4;
      }
    }
  }
}

function gameSetting () {
  // my brain hurts and i have no other ideas on how to fix this problem
  if (levels % 9 === 0){
    speedChecker = !speedChecker;
  }
  if (speedChecker === true){
    if (levels % 5 === 0 && speed !== 0){
      speed -= 2;
      speedChecker = !speedChecker;
    }
  }

  if (score % 1100 === 0) {
    healthChecker = !healthChecker;
  }
  if (healthChecker === true){
    if (score  && (score % 1000 === 0) && lives <= 10){
      lives++;
      healthChecker = !healthChecker;
    }
  }

  if (lives === 0){
    isGameOver = true;
  }
  
  // display lives and level
  fill("black");
  textSize(50);
  text("LEVEL:" + levels, windowWidth/2, windowHeight-150, 800, 800);
  text("LIVES:" + lives, windowWidth/2, windowHeight-200, 800, 800);
}

function gameOver() {
  if (isGameOver){
    for (let y=0; y<gridSize; y++){
      for (let x=0; x<gridSize; x++){
        if (grid[y][x] !== 1){
          grid[y][x] = 1; // turns background into black
        }
      }
    }

    // displays game over screen
    imageMode(CENTER);
    image(theGameOver, windowWidth/2, windowHeight/2, windowWidth, windowHeight);

    fill("white");
    if (score === 0 ){
      text("YOUR SCORE IS " + score + " D:", windowWidth/2, windowHeight-100, 800, 800);
    }
    else{
      text("YOUR SCORE IS " + score + " :D", windowWidth/2, windowHeight-100, 800, 800);
    }
  }
}

function spawngoose() {
  let y = 22;
  for (let x=0; x<gridSize; x++){
    if(hasGoose === false){
      if (grid[y][x] === 2 && random(100) < 10){
        grid[y][x] = 5;
        hasGoose = !hasGoose;
      }
    }
  }
}

function gooseMovement() {
  spawngoose();

  let choice = random(100);
  for (let y=0; y<gridSize; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 5 && frameCount % speed === 0){
        if (choice < 33){ // moves up
          grid[y][x] = 2;
          grid[y-1][x] = 5;
        }
        else if (choice < 66){
          if (x !== 29){ // checks if it's the right border
            grid[y][x] = 2; // moves up and right
            grid[y-1][x+1] = 5;
          }
        }
        else {
          if (x !== 0){ // checks if it's the left border
            grid[y][x] = 2; // moves up and left
            grid[y-1][x-1] = 5;
          }
        }
      }
      if (grid[y][x] === 5 && y === 0){ // loses lives when goose reach to the top
        grid[y][x] = 2;
        lives -= 1;
        hasGoose = !hasGoose;
      }
    }
  }
}

function mousePressed() { // allows you to shoot the duck and they respawn
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 5){
    grid[cellY][cellX] = 2;
    levels ++;
    score += 100;
    hasGoose = !hasGoose;
  }
}
