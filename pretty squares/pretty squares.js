var svg, path;

window.addEventListener("keypress", function(e){
    if(e.key === 's'){
        console.log("you pressed s");
        save("SVG.svg")
    }
} );

function preload() {
    let container = document.createElement('div')
    svg = container.querySelector('svg');
    frameRate(75);    
}


function setup() {
    createCanvas(1000, 500, SVG);    
    //createCanvas(720, 400,svg);
    strokeWeight(0.1);
    noFill();
    background(0);
    noLoop();  
}


function draw() {
    background(0, 0, 0, 50);
    for(var i = 0; i < width; i++){
      var r = random(0, 255);
      var g = random(0, 255);
      var b = random(0, 255);
      var a = random(0, 255);
      fill(r, g, b, a);
      var x = random(0, width);
      var y = random(0, height);
      var w = random(1, 50);
      var h = random(1, 50);
      rect(x, y, w, h);
    }
  }