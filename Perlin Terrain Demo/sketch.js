// Terrain

let rectHeight = [];
let numberOfRects;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  generateTerrain();
}

function draw() {
  background(220);
  displayTerrain();
}

function generateTerrain() {
  let time = 0;
  for (let i=0; i<numberOfRects; i++){
    let theHeight = noise(time) * height;
    rectHeight.push(theHeight);
    time += 0.002;
  }
}

function displayTerrain(){
  let theWidth = width/rectHeight.length;
  for (let i=0; i< rectHeight; i++){
    let theHeight = rectHeight[i];
    fill("black");
    rect(theWidth*i, height , 10, -theHeight);
  }
}
