let colorlist = ['gold', 'blue', 'turquoise', 'red']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 25, 25);
}