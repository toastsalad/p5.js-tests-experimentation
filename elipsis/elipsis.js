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
    window.addEventListener("keypress", function(e){
        if(e.key === 's'){
            console.log("you pressed s");
        }
    } );
    
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

    background(0,10);
    
    fill(255, 255, 255, 255);
    for (let x = 0; x <= width; x = x + 10) {
      for (let y = 0; y <= height; y = y + 10) {
        let r = random(255);
        ellipse(x, y, r, r);
      }
    }
  }