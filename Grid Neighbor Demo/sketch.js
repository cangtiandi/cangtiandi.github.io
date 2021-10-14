
// Grid Demo

let gridSize = 50;
let grid;
let clickaudio;

function preload(){
  clickaudio = loadSound("assets/Minecraft Cave Sounds Sound Effect Pack/cave1.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize,gridSize);
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  clickaudio.play();

  swap(cellX ,cellY);
  swap(cellX+1, cellY);
  swap(cellX-1, cellY);
  swap(cellX, cellY+1);
  swap(cellX, cellY-1);
}

function swap(x,y){
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize){
    if(grid[y][x] === 1){
      grid[y][x] = 0;
    }
    else if(grid[y][x] === 0){
      grid[y][x] = 1;
    }
  }

 
}

function createEmpty2DArray(rows,cols, numToFill = 0){
  let grid = [];
  if (numToFill === 0){
    for (let y=0; y<rows; y++){
      grid.push([]);
      for (let x=0; x<cols; x++){
        grid[y].push(0);
      }
    }
    return grid;
  }
  else if (numToFill === 1){
    for (let y=0; y<rows; y++){
      grid.push([]);
      for (let x=0; x<cols; x++){
        grid[y].push(1);
      }
    }
    return grid;
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

function createRandom2DArray(rows,cols){
  let grid = [];
  for (let y=0; y<rows; y++){
    grid.push([]);
    for (let x=0; x<cols; x++){
      if (random(100) < 50){
        grid[y].push(0);
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}


function keyPressed(){
  if (key === "r"){
    grid = createRandom2DArray(gridSize,gridSize);
  }
  if (key === "e"){
    grid = createEmpty2DArray(gridSize,gridSize);
  }
  if (key === "b"){
    grid = createEmpty2DArray(gridSize,gridSize, 1);
  }
}