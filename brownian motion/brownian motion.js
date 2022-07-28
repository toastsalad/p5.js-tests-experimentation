function preload() {    
    frameRate(2000);
    window.addEventListener("keypress", function(e){
      if(e.key === 's'){
          console.log("you pressed s");
          save();
      }
  } );  
}

var svg, path;

let num = 20000;
let range = 1;

lastXVal = 0;
lastYVal = 0;

function setup() {
  createCanvas(400, 400, SVG);
  strokeWeight(.2);
  noFill();
  for ( let i = 0; i < num; i++ ) {
    lastXVal = width / 2;
    lastYVal = height / 2;
    currentXVal = lastXVal;
    currentYVal = lastYVal;
  }
}

function draw() {
  clear();

  for(let i = 1; i < num; i++){
    currentXVal += random(-range, range);
    currentYVal += random(-range, range);
    currentXVal = constrain(currentXVal, 0, width);
    currentYVal = constrain(currentYVal, 0, height);
  
    line(currentXVal, currentYVal, lastXVal, lastYVal);
  
    lastXVal = currentXVal;
    lastYVal = currentYVal;
  }
  noLoop();
}