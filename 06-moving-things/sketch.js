var sw = 600;
var sh = 600;
var gw = 10;
var gh = 10;
var tw = sw / gw;
var th = sh / gh;
var pgx = 0;
var pgy = 0;
var grid = makeGridArray(gw,gh);

// the setup function runs when your sketch starts up
function setup() {
  createCanvas(sw+1, sh+1);
  randomSeed(878969);
  for (var x=0; x<grid.length; x++) {
    for (var y=0; y<grid[x].length; y++) {
      grid[x][y] = {color: 200};
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
      if (grid[gx][gy].color < 200) {
        grid[gx][gy].color += 2;
      }
      drawGridRectangle(gx, gy);
    }
  }
  drawPlayer(pgx, pgy);
}

function drawGridRectangle(gx, gy) {
  var x = (gx * tw);
  var y = (gy * th);
  stroke(0);
  fill(grid[gx][gy].color);
  rect(x, y, tw, th);
}

function drawPlayer(gx, gy) {
  var x = (gx * tw) + (tw / 2);
  var y = (gy * th) + (th / 2);
  stroke(0);
  fill(230);
  circle(x, y, (tw / 2)-4);
}

// the mouseClicked function is called when the user clicks on your sketch
function mouseClicked() {
  var gx = floor(mouseX / tw);
  var gy = floor(mouseY / th);
  //print('the ' + mouseButton + ' mouse button was clicked at grid ' + gx + ',' + gy);
  grid[gx][gy].color = 0;
  pgx = gx;
  pgy = gy;
}

// the keyTyped function is called when the user types a key
function keyTyped() {
  //print('the key ' + key + ' was typed');
  var moved = false;
  if (key == 'w') {
    pgy -= 1;
    if (pgy < 0) pgy = 0;
    moved = true;
  } else if (key == 's') {
    pgy += 1;
    if (pgy > (gh - 1)) pgy = (gh - 1);
    moved = true;
  } else if (key == 'a') {
    pgx -= 1;
    if (pgx < 0) pgx = 0;
    moved = true;
  } else if (key == 'd') {
    pgx += 1;
    if (pgx > (gw - 1)) pgx = (gw - 1);
    moved = true;
  }
  if (moved) {
    grid[pgx][pgy].color = 0;
  }
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