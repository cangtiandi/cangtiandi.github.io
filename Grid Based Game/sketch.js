
// Grid Demo
let gridSize = 30;
let grid;

let geese;
let hasGeese = false;

let level = 0; 
let score = 0;


function preload() {
  geese = loadImage("assets/Canadian Geese.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmpty2DArray(gridSize,gridSize);
  theBackground();

  spawnGeese();
}

function draw() {
  background(220);
  displayGrid();
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
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;
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
  for (let y=2; y< 23; y++){
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
  let newboard = background();

  grid = newboard;
}
