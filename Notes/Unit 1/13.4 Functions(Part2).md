**To create your own function, you need to do four things:**

1.  Start with the function keyword.
2.  Then write the name of the function.
3.  Inside parenthesis (), list any parameters the function takes.
4.  Inside curly brackets {}, write the code that will run whenever the function is called. This is called the body of the function.


You’ve actually already been defining your own functions: setup and draw are functions that p5.js automatically calls.


**Example:**
Here’s a function that draws a red circle:

![image](https://github.com/Sshiril/Javascript/assets/113382540/022dbbb8-739a-4033-ae07-248d000ff36b)

This function is called drawRedCircle and takes three parameters: circleX, circleY, and circleDiameter. The body of the function changes the fill color to red and then uses the parameters to draw a circle.

To call this function, you’d use its name and give it parameters, exactly like you’ve been calling other functions:


function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(32);
  drawRedCircle(100, 200, 50);
}
function drawRedCircle(circleX, circleY, circleDiameter) {
  fill(255, 0, 0);
  circle(circleX, circleY, circleDiameter);
}


![image](https://github.com/Sshiril/Javascript/assets/113382540/bcd284a6-1c9f-4734-82e0-142845a5a4e1)
