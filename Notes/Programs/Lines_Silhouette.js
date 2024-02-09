//for loops
const minLineWidth = 0;
const maxLineWidth = 100;
let lineWidthChange = 10;

function setup() {
  createCanvas(300, 300);
  frameRate(1);
  strokeWeight(2);
  stroke(255);
}

function draw() {
  background(32);

  let lineWidth = random(minLineWidth, maxLineWidth);
  for(let lineY = 0; lineY < height; lineY++){
    lineWidth += random(-lineWidthChange, lineWidthChange);
    lineWidth = constrain(lineWidth, minLineWidth, maxLineWidth);

    line(width / 2 - lineWidth, lineY, width / 2 + lineWidth, lineY);
  }
}
