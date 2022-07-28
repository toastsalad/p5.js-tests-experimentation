var svg, path;

function preload() {
    let container = document.createElement('div')
    svg = container.querySelector('svg');
    //frameRate(75);

    window.addEventListener("keypress", function(e){
        if(e.key === 's'){
            console.log("you pressed s");
            save("SVG.svg")
        }
    } );
}


function setup() {
    createCanvas(1200, 1200, SVG);
    strokeWeight(0.1);
    noFill();
    background(0);
    noLoop();      
}

//ESTABLISH MAX AND MINS. EACH IS HALVED

function draw() {
    clear();
    const xmin = width / 2;
    const xmax = width;
    const ymin = height / 2;
    let ymax = height;

    let spacing = 5;
    let displacement = 25;

    //get rid of cartesian
    //translate(width/2, height/2); 
    //scale(1, -1);

    //remember this is cartesian - 0,0 is top left
    //line(0, 0, ymax, 0);

    //line(0, 0, 0, width);

    //line(ymin, 0, ymin, width);

    //line(0, xmin, ymax, xmin);

    //line(0, xmax, xmax, ymax);

    //drawScope(xmin, xmax, spacing, ymin, ymax,0,0);
    //drawScope1(ymin , ymax, spacing, xmin,0,0);
    //drawScope(xmin + 1, xmax + 1, spacing, ymin, ymax,-ymin,-xmin);
    //drawScope1(ymin , ymax, spacing, xmin,0,ymax);

    drawScope(xmin,xmax, spacing,ymin,ymax,0,0);

    //push();
    noLoop();
}

function drawScope(xmin, xmax, spacing, ymin, ymax, originx, originy) {
    translate(originx,originy)
    rotate(0);
    tempmin = xmin;
    for (x = 0; x <= xmin; x++){
        if (x % spacing === 1 || x === xmax) {  

            line(x,xmin - x, ymin + x, x);
            line(x,xmin + x, ymin - x, x);
            //line(0, tempmin, tempmax, 0); 
        }
           
        //console.log("line 1 " + xmin + " " + tempmin + " " + tempmax + " " + ymin)    
    }


    tempmin = xmin;
    for (x = xmax; x > xmin; x--) {
        if (x % spacing === 1 || x === xmax) {
            line(xmin, tempmin, x, ymin);
            console.log("line 1 " + xmin + " " + tempmin + " " + x + " " + ymin)
            line(xmax, tempmin, x, ymax);
            console.log("line 2 " + xmax + " " + tempmin + " " + x + " " + ymax)
        }
        tempmin = tempmin + 1;
    }
}

function drawScope1(ymin, ymax, spacing, xmin, originx, originy) {
    translate(originx,originy)
    tempmin = ymin;
    for (y = ymax; y > ymin; y--) {
        if (y % spacing === 1 || y === ymax) {
            line(ymax, tempmin, y, 0);
            line(ymin, tempmin, y, xmin);
        }
        tempmin = tempmin - 1;

    }
}

