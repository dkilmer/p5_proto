var sw = 400;
var sh = 400;

// the setup function runs when your sketch starts up
function setup() {
  createCanvas(sw, sh);
  //kindsOfVariables();
  //doIfStatement();
  //doForLoop();
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
  var o = { name: 'me', age: 38, tall: true };
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
  for (var i=0; i<10; i++) {
    print(i);
  }
  
  for (var y=0; y<4; y++) {
    for (var x=0; x<4; x++) {
      print('x is ' + x + ' and y is ' + y);
    }
  }
}
