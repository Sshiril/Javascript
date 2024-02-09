const message = '   Coding is fun';
const messageX = 20;
const messageY = 150;

function setup() {
  createCanvas(300, 300);
  textSize(32);
}

function draw() {
  background(32);

  if (isMouseInsideText(message, messageX, messageY)) {   //calling the function 
    cursor(HAND);
    fill(0, 200, 255);
    stroke(0, 200, 255);
  } else {
    cursor(ARROW);
    fill(255);
    stroke(255);
  }

  text(message, messageX, messageY);     //  the first value is the message then x-coordinate and y-coordinate
}

function mouseClicked() {
  if (isMouseInsideText(message, messageX, messageY)) {    //calling the function inside the if condition
    window.open('https://blacklivesmatter.com/', '_blank');
  }
}

function isMouseInsideText(message, messageX, messageY) {     //created a function with three parameters
  const messageWidth = textWidth(message);
  const messageTop = messageY - textAscent();
  const messageBottom = messageY + textDescent();

  return mouseX > messageX && mouseX < messageX + messageWidth &&                 //return the value 
    mouseY > messageTop && mouseY < messageBottom;
}
