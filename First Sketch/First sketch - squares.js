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
    clear();
    for (x = 0; x < 50; x++) {
        for (y = 0; y < 50; y++) {
          rect(x * 5, y * 5, x/20, y/20);
        }
      }
      noLoop();
}

function drawCircle(x, radius, level) {
    // 'level' is the variable that terminates the recursion once it reaches 
    // a certain value (here, 1). If a terminating condition is not 
    // specified, a recursive function keeps calling itself again and again
    // until it runs out of stack space - not a favourable outcome! 
    const tt = (126 * level) / 4.0;
    fill(tt);
    ellipse(x, height / 2, radius * 2, radius * 2);
    if (level > 1) {  
      // 'level' decreases by 1 at every step and thus makes the terminating condition
      // attainable
      level = level - 1;  
      drawCircle(x - radius / 2, radius / 2, level);
      drawCircle(x + radius / 2, radius / 2, level);
    }
  }

