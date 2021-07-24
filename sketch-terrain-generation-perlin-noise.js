
let cols, rows;
let scl = 20;
let w = 2000;
let h = 1600;

let terrain = [[],[]];

let flying = 0;

//unable creating multi dimensional arrays
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function setup() {
  createCanvas(600, 600, WEBGL);

  cols = w / scl;
  rows = h / scl;

  terrain = createArray(cols, rows);

  
}

function draw() {

    flying -= 0.1;

    let yoff = flying;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
            for (let x = 0; x < cols; x++) {
                terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
                xoff += 0.2;
            }
            yoff += 0.2;
    }


    background(0);
    stroke(255);
    noFill();

    translate(width/2, height/2, 400);
    rotateX(PI/3);
    translate(-w*0.75, -h*0.75);
  

    for (let y = 0; y < rows-1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x*scl, y*scl, terrain[x][y]);
            vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
        }
        endShape();
    }
}