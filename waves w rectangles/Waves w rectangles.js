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
}



function draw() {
    background(0, 15);
  
    for (let i = 0; i < width; i++) {
      let x = map(i, 0, width, 0, TWO_PI);
      let y = sin(x);
  
      let s = map(y, -1, 1, 0, height);
      let c = map(i, 0, width, 255, 0);
  
      fill(c, s, s);
      rect(i, height/2-s/2, 1, s);
    }
  }