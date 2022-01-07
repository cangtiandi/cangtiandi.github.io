// Selection Sort Demo

let someList = [5,15,3,8,9,1,20,7];

function selectionSort(aList) {
  let swapLocation = aList.length -1;
  
  while (swapLocation > 0) {
    let highLocation = 0; 
    for (let currentLocation=0; currentLocation <= swapLocation; currentLocation++){
      if (aList[currentLocation] > aList[highLocation]){
        highLocation = currentLocation;
  
      }
    }
    let temp = aList[swapLocation];
    aList[swapLocation] = aList[highLocation];
    aList[highLocation] = temp;
    swapLocation--;
    console.log(aList);
  }
  return aList;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(someList));
}

function draw() {
}
