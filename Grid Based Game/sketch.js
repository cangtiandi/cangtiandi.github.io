
// Grid Demo
let gridSize = 30;
let grid;

let geese;

let level = 0; 
let score = 0;

// class Bird {
//   constructor(x,cellWidth, cellHeight){
//     this.x = x;
//     this.y = 30;
//     this.dx = random(-5, 5);
//     this.dy = random(-5, 5);

//   }

//   display() {
//     imageMode(CENTER);
//     image(geese, this.x*cellWidth, this.y*cellHeight, cellWidth, cellHeight);
//   }

//   move() {
//     let choice = random(75);
//     if (choice < 25){ //up
//       this.y -= this.speed;
//     }
//     else if (choice < 50){ //left
//       this.x -= this.speed;
//     }
//     else if (choice < 75){ // right
//       this.x += this.speed;
//     }
//   }
// }

function preload() {
  geese = loadImage("assets/Canadian Geese.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmpty2DArray(gridSize,gridSize);
  theBackground();
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
      else if (grid[y][x] === 2){
        fill("#ADD8E6"); //light blue
      }
      else if (grid[y][x] === 3){
        fill("#008000");//green
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

function geeseMovement() {
  if (grid[20][20] === 2){
    grid[20][20] = 5;
  }
}