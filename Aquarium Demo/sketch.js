// Aquarium Demo

let theCreatures = [];
let clownfish;
let octopusImg;

function preload() {
  clownfish = loadImage("assets/Clownfish.png");
  octopusImg = loadImage("assets/Octopus.png");
}

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<50; i++){
    if (random(100) < 30){
      let octopus = new Octopus(100,200, 100, octopusImg);
      theCreatures.push(octopus);
    }
    else {
      let fish = new Clownfish(random(width), random(100, height - 100), 30, clownfish);
      theCreatures.push(fish);
    }
  }
}

function draw() {
  background(220);
  for (let someCreature of theCreatures) {
    someCreature.update();
    someCreature.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x += 4;
    this.y = noise(this.yTime)*height;
    this.yTime += random(0.001, 0.005);

    // teleport if reaches far right of the screen
    if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }
}

class Clownfish extends Creature {
  constructor(x, y, size, theImage) {
    super(x, y, size);
    this.myImage = theImage;
    this.yTime = 1000;
  }

  display() {
    image(this.myImage, this.x, this.y, this.size, this.size);
  }
}

class Octopus extends Creature {
  constructor(x, y, size, someImage) {
    super(x, y, size);
    this.image = someImage;
    this.yTime = 100;
  }

  display() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
}