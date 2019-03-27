var sw = 600;
var sh = 600;

// the setup function runs when your sketch starts up
function setup() {
  createCanvas(sw, sh);
  randomSeed(878969);
}

// the draw function is automatically called lots of times a second
function draw() {
  background(220);
  drawRandomThing();
  /*
  for (var i = 0; i < 1000; i++) {
    drawRandomRectangle();
  }
  */
}

function drawRandomThing() {
  setRandomFillAndStroke();
  var thing = floor(random(5));
  if (thing == 0) {
    drawRandomLine();
  } else if (thing == 1) {
    drawRandomCircle();
  } else if (thing == 2) {
    drawRandomEllipse();
  } else if (thing == 3) {
    drawRandomRectangle();
  } else if (thing == 4) {
    drawRandomText();
  }
}

function drawRandomLine() {
  var x1 = floor(random(sw));
  var y1 = floor(random(sh));
  var x2 = floor(random(sw));
  var y2 = floor(random(sh));
  line(x1,y1,x2,y2);
}

function drawRandomCircle() {
  var x = floor(random(sw));
  var y = floor(random(sh));
  var r = random(10, 40);
  ellipse(x, y, r, r);
}

function drawRandomEllipse() {
  var x = floor(random(sw));
  var y = floor(random(sh));
  var w = floor(random(10, 60));
  var h = floor(random(10, 60));
  ellipse(x, y, w, h);
}

function drawRandomRectangle() {
  var x = floor(random(sw));
  var y = floor(random(sh));
  var w = floor(random(10, 60));
  var h = floor(random(10, 60));
  rect(x, y, w, h);
}

function drawRandomText() {
  var x = floor(random(sw));
  var y = floor(random(sh));
  var size = floor(random(10, 40));
  textSize(size);
  text('wut', x, y);
}

function setRandomFillAndStroke() {
  var fillColor = floor(random(10, 256));
  var strokeColor = floor(random(10, 256));
  var strokeSize = floor(random(1, 4));

  fill(fillColor);
  stroke(strokeColor);
  strokeWeight(strokeSize);
}

// the mouseClicked function is called when the user clicks on your sketch
function mouseClicked() {
  print('the ' + mouseButton + ' mouse button was clicked at ' + mouseX + ',' + mouseY);
}

// the keyTyped function is called when the user types a key
function keyTyped() {
  print('the key ' + key + ' was typed');
}

// ***************************************
// functions I wrote
// ***************************************

function kindsOfVariables() {
  // integer
  var i = 3;
  print('i is ' + i);

  // decimal number (float)
  var f = 3.1415;
  print('f is ' + f);

  // string
  var s = 'string';
  print('s is ' + s);

  // array
  var a = [1, 2, 3, 4, 5];
  print('a is ' + a);

  var sa = ['a', 'b', 'c', 'd'];
  print('sa is ' + sa);

  // object
  var o = {
    name: 'me',
    age: 38,
    tall: true
  };
  print('o is ' + o);
  print('o is really ' + JSON.stringify(o));
  print('o.name is ' + o.name);
}

function doIfStatement() {
  var str1 = 'I am a string';
  var str2 = 'I am also a string';
  if (str1 === str2) {
    print(str1 + ' is the same as ' + str2);
  } else {
    print(str1 + ' is different than ' + str2);
  }

  var num = 5;
  if (num === 5) {
    print('yep, num is 5');
  }
}

function doForLoop() {
  for (var i = 0; i < 10; i++) {
    print(i);
  }

  for (var y = 0; y < 4; y++) {
    for (var x = 0; x < 4; x++) {
      print('x is ' + x + ' and y is ' + y);
    }
  }
}