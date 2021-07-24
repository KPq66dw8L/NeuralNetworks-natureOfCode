
// Marching Squares

let field = [];
let rez = 5;
let cols, rows;
let increment = 0.1;
let zoff = 0;
let noise;

//ne tourne pas en boucle
function setup() {
  createCanvas(600, 600);
  noise = new OpenSimplexNoise(Date.now());
  cols = 1 + width / rez;
  rows = 1 + height / rez;
  
    
  for (let i = 0; i < cols; i++) {
    let k = [];
    for (let j = 0; j < rows; j++) {
      k.push(null);
    }
    field.push(k);
  }
}

function drawLine(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}

//tourne en boucle au rythme du frameRate
function draw() {
  background(0);
  //on donne a chaque point (non affiché là) un float entre -1 et 1 avec le perlin noise
  let xoff = 0;
  for (let i = 0; i < rows; i++) {
    xoff += increment;
    let yoff = 0;
    for (let j = 0; j < cols; j++) {
      field[i][j] = float(noise.noise3D(xoff, yoff, zoff));
      yoff += increment;
    }
  }
  zoff += 0.02;

  // for (let i = 0; i < cols; i++) {
  //  for (let j = 0; j < rows; j++) {
  //    stroke(field[i][j]*255);
  //     strokeWeight(rez*0.4);
  //    point(i*rez, j*rez);
  //  }
  // }

  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      //obtention des coordonnées x, y dans le repère, sachant que l'espace entre deux point = rez
      let x = i * rez;
      let y = j * rez;
      //on place les points au centre de chaque arrête de chaque carré (pas exactement centre si on veut + smooth)
      let a = createVector(x + math.abs(field[i][j]), y);
      let b = createVector(x + rez, y + math.abs(field[i][j]));
      let c = createVector(x + math.abs(field[i][j]), y + rez);
      let d = createVector(x, y + math.abs(field[i][j]));
      let state = getState(
        ceil(field[i]    [j]),
        ceil(field[i + 1][j]),
        ceil(field[i + 1][j + 1]),
        ceil(field[i]    [j + 1])
      );
      stroke(255);
      strokeWeight(1);
      switch (state) {
        case 1:
          drawLine(c, d);
          break;
        case 2:
          drawLine(b, c);
          break;
        case 3:
          drawLine(b, d);
          break;
        case 4:
          drawLine(a, b);
          break;
        case 5:
          drawLine(a, d);
          drawLine(b, c);
          break;
        case 6:
          drawLine(a, c);
          break;
        case 7:
          drawLine(a, d);
          break;
        case 8:
          drawLine(a, d);
          break;
        case 9:
          drawLine(a, c);
          break;
        case 10:
          drawLine(a, b);
          drawLine(c, d);
          break;
        case 11:
          drawLine(a, b);
          break;
        case 12:
          drawLine(b, d);
          break;
        case 13:
          drawLine(b, c);
          break;
        case 14:
          drawLine(c, d);
          break;
      }
    }
  }
}
//on cherche à savoir auquel des 16 cas possibles le carré correspond
function getState(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}
