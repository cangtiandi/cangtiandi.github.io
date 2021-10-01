// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis
let lastTimeSwitched = 0;
let state = "red";
let redDuration = 3000;
let greenDuration = 3000;
let yellowDuration = 1000;
function setup() {
  createCanvas(100, 300);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  pickCorrectLight();
  colorCorrectLight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function colorCorrectLight() {
  if (state === "green") {
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  } else if (state === "yellow") {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  } else if (state === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
}

function pickCorrectLight() {
  if (state === "red" && millis() > lastTimeSwitched + redDuration) {
    state = "green";
    lastTimeSwitched = millis();
  } else if (state === "green" && millis() > lastTimeSwitched + greenDuration) {
    state = "yellow";
    lastTimeSwitched = millis();
  } else if (state === "yellow" && millis() > lastTimeSwitched + yellowDuration) {
    state = "red";
    lastTimeSwitched = millis();
  }
}
