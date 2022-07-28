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
    frameRate(30);
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
}

function draw() {
    for (let i = 0; i < width; i++) {
      let x = i / width;
      let y = noise(x, frameCount * 0.01);
      fill(255);
      ellipse(i, y * height, 5);
    }
  }