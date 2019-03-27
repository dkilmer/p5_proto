var sw = 600;
var sh = 600;
var gw = 10;
var gh = 10;
var tw = sw / gw;
var th = sh / gh;
var grid = makeGridArray(gw,gh);

// the setup function runs when your sketch starts up
function setup() {
  createCanvas(sw+1, sh+1);
  randomSeed(878969);
  for (var x=0; x<grid.length; x++) {
    for (var y=0; y<grid[x].length; y++) {
      grid[x][y] = 0;
    }
  }
  //setGridToXY(grid);
  //print(JSON.stringify(grid));
}

// the draw function is automatically called lots of times a second
function draw() {
  background(220);
  for (var gx=0; gx<gw; gx++) {
    for (var gy=0; gy<gh; gy++) {
      drawGridRectangle(gx, gy);
    }
  }
}

function drawGridRectangle(gx, gy) {
  var x = (gx * tw);
  var y = (gy * th);
  stroke(0);
  if (grid[gx][gy] == 0) {
    fill(200);
  } else {
    fill(100);
  }
  rect(x, y, tw, th);
}

// the mouseClicked function is called when the user clicks on your sketch
function mouseClicked() {
  //print('the ' + mouseButton + ' mouse button was clicked at ' + mouseX + ',' + mouseY);
  var gx = floor(mouseX / tw);
  var gy = floor(mouseY / th);
  print('the ' + mouseButton + ' mouse button was clicked at grid ' + gx + ',' + gy);
  grid[gx][gy] = 1;
}

// the keyTyped function is called when the user types a key
function keyTyped() {
  print('the key ' + key + ' was typed');
}

function makeGridArray(width, height) {
  var a = new Array(width);
  for (var x=0; x<width; x++) {
    a[x] = new Array(height);
  }
  return a;
}

function setGridToXY(grid) {
  for (var x=0; x<grid.length; x++) {
    for (var y=0; y<grid[x].length; y++) {
      grid[x][y] = {x: x, y: y};
    }
  }
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