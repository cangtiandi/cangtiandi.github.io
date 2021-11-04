let grid;
let gridSize = 30;
let cellWidth, cellHeight;

let geese;
let hasGeese = false;
let levels = 0; 
let score = 0;
let lives = 3;
let speed = 30;


function preload() {
  geese = loadImage("assets/Canadian Geese.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
  grid = createEmpty2DArray(gridSize,gridSize);
  theBackground();
  gameRules();
}

function draw() {
  background(220);
  displayGrid();
  geeseMovement();
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
        image(geese, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
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

function spawnGeese() {
  for (let y=22; y<23; y++){
    for (let x=0; x<gridSize; x++){
      if(hasGeese === false){
        if (grid[y][x] === 2 && random(100) < 10){
          grid[y][x] = 5;
          hasGeese = !hasGeese;
        }
      }
    }
  }
}

function geeseMovement() {
  spawnGeese();
  
  let choice = random(100);
  for (let y=0; y<gridSize; y++){
    for (let x=0; x<gridSize; x++){
      if (grid[y][x] === 5 && frameCount % speed === 0 ){
        if (choice < 33){ // moves up
          grid[y][x] = 2;
          grid[y-1][x] = 5;
        }
        else if (choice < 66){
          if (x !== gridSize.length - 1){ // moves up and right
            grid[y][x] = 2;
            grid[y-1][x+1] = 5;
          }
        }
        else {
          if (x !== 0){ // moves up and left
            grid[y][x] = 2;
            grid[y-1][x-1] = 5;
          }
        }
      }
      if (grid[y][x] === 5 && y === 0){ // loses live when geese reach to the top
        grid[y][x] = 2;
        lives -= 1;
        hasGeese = !hasGeese;
      }
    }
  }
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 5){
    grid[cellY][cellX] = 2;
    levels ++;
    score += 100;
    hasGeese = !hasGeese;
  }
}

function gameRules() {
  if (levels % 5 === 0){
    speed -= 3;
  }
}