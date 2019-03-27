// the setup function runs when your sketch starts up
function setup() {
  createCanvas(400, 400);
}

// the draw function is automatically called lots of times a second
function draw() {
  background(220);
}

// the mouseClicked function is called when the user clicks on your sketch
function mouseClicked() {
  print('the ' + mouseButton + ' mouse button was clicked at ' + mouseX + ',' + mouseY);
}

// the keyTyped function is called when the user types a key
function keyTyped() {
  print('the key ' + key + ' was typed');
}

