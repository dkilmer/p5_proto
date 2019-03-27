var sw = 600;
var sh = 600;
var tilesX = 20;
var tilesY = 20;
var tw = sw / tilesX;
var th = sh / tilesY;
var numTiles = tilesX * tilesY;
var tiles = makeGridArray(tilesX, tilesY);
var numBombs = 60;

function setup() {
  print('the tile width is ' + tw);
  print('the tile height is ' + th);
  randomSeed(142857);
  for (var x = 0; x < tilesX; x++) {
    for (var y = 0; y < tilesY; y++) {
      tiles[x][y] = {
        up: false,
        flag: false,
        bomb: false,
        bombCount: 0
      };
    }
  }
  createCanvas(sw, sh);
  textSize(24);
  textAlign(CENTER);
  newGame();
}

function draw() {
  background(220);
  for (var y = 0; y < tilesY; y++) {
    for (var x = 0; x < tilesX; x++) {
      drawTile(x, y);
    }
  }
}

function drawTile(x, y) {
  var tile = getTile(x, y);
  if (tile.up) {
    if (tile.bomb) {
      drawBombTile(tile, x, y);
    } else if (tile.bombCount > 0) {
      drawNumberTile(tile, x, y);
    } else {
      drawBlankTile(tile, x, y);
    }
  } else {
    if (tile.flag) {
      drawFlagTile(tile, x, y);
    } else {
      drawDownTile(tile, x, y);
    }
  }
}

function drawDownTile(tile, x, y) {
  fill(192);
  stroke(230);
  rect(x * tw, y * th, tw, th);
}

function drawFlagTile(tile, x, y) {
  fill(192);
  stroke(230);
  rect(x * tw, y * th, tw, th);
  drawTextInTile(x, y, 'F');  
}

function drawBlankTile(tile, x, y) {
  fill(255);
  stroke(230);
  rect(x * tw, y * th, tw, th);
}

function drawNumberTile(tile, x, y) {
  fill(255);
  stroke(230);
  rect(x * tw, y * th, tw, th);
  drawTextInTile(x, y, tile.bombCount);
}

function drawBombTile(tile, x, y) {
  fill(255);
  stroke(230);
  rect(x * tw, y * th, tw, th);
  fill(0);
  stroke(30);
  ellipse(x * tw + (tw / 2), y * th + (th / 2), tw - 10, th - 10);
}

function drawTextInTile(x, y, txt) {
  noStroke();
  fill(128);
  var textH = textAscent();
  text(txt, (x * tw) + (tw / 2), (y * th) + textH + ((th-textH)/2));
}


function mouseClicked() {
  var gx = floor(mouseX / tw);
  var gy = floor(mouseY / th);
  var tile = getTile(gx, gy);
  //  if (tile) {
  //    print(JSON.stringify(tile));
  //  }
  if (mouseButton === LEFT) {
    //print('you clicked at (' + gx + ',' + gy + ') ' + JSON.stringify(tile));
    if (!tile.up) {
      if (tile.bomb) {
        // you lose
        tile.up = true;
      } else if (tile.bombCount === 0) {
        exposeBlanks(gx, gy);
      } else {
        tile.up = true;
      }
    }
  } else if (mouseButton === CENTER) {
    if (!tile.up) {
      if (tile.flag) {
        tile.flag = false;
      } else {
        tile.flag = true;
      }
      // another way to say the same thing would be:
      // tile.flag = !tile.flag
    }
  }
}

function keyTyped() {
  if (key === 'n') {
    newGame();
  } else if (key === 's') {
    for (var y = 0; y < tilesY; y++) {
      for (var x = 0; x < tilesX; x++) {
        var tile = getTile(x, y);
        tile.up = !tile.up;
      }
    }
  }
}

function exposeBlanks(x, y) {
  var tile = getTile(x, y);
  if (!tile) return;
  if (tile.bomb) return;
  if (tile.up) return;
  if (tile.bombCount > 0) {
    tile.up = true;
    return;
  }
  tile.up = true;
  exposeBlanks(x - 1, y - 1);
  exposeBlanks(x, y - 1);
  exposeBlanks(x + 1, y - 1);
  exposeBlanks(x - 1, y);
  exposeBlanks(x + 1, y);
  exposeBlanks(x - 1, y + 1);
  exposeBlanks(x, y + 1);
  exposeBlanks(x + 1, y + 1);
}

function newGame() {
  for (var y = 0; y < tilesY; y++) {
    for (var x = 0; x < tilesX; x++) {
      var tile = getTile(x, y);
      tile.up = false;
      tile.flag = false;
      tile.bomb = false;
      tile.bombCount = 0;
    }
  }
  for (i = 0; i < numBombs; i++) {
    setRandomBomb();
  }
  calculateBombCounts();
}

function setRandomBomb() {
  var bx = floor(random(tilesX));
  var by = floor(random(tilesY));
  var tile = getTile(bx, by);
  tile.bomb = true;
  //print('setting random bomb at ('+bx+','+by+')');
}

function calculateBombCounts() {
  for (var y = 0; y < tilesY; y++) {
    for (var x = 0; x < tilesX; x++) {
      var tile = getTile(x, y);
      if (!tile.bomb) {
        var cnt = 0;
        if (hasBomb(x - 1, y - 1)) cnt++;
        if (hasBomb(x, y - 1)) cnt++;
        if (hasBomb(x + 1, y - 1)) cnt++;
        if (hasBomb(x - 1, y)) cnt++;
        if (hasBomb(x + 1, y)) cnt++;
        if (hasBomb(x - 1, y + 1)) cnt++;
        if (hasBomb(x, y + 1)) cnt++;
        if (hasBomb(x + 1, y + 1)) cnt++;
        tile.bombCount = cnt;
      }
    }
  }
}

function calculateOneBombCount(tile) {}

function hasBomb(x, y) {
  var tile = getTile(x, y);
  if (tile) return tile.bomb;
  return false;
}

function loc(x, y) {
  return '(' + x + ',' + y + ')';
}

function makeGridArray(width, height) {
  var a = new Array(width);
  for (var x=0; x<width; x++) {
    a[x] = new Array(height);
  }
  return a;
}

function getTile(x, y) {
  if (x < 0) return undefined;
  if (y < 0) return undefined;
  if (x >= tilesX) return undefined;
  if (y >= tilesY) return undefined;
  return tiles[x][y];
}

function doForLoop() {
  for (var i = 0; i < 10; i++) {
    print(i);
  }

  for (var y = 0; y < tilesY; y++) {
    for (var x = 0; x < tilesX; x++) {
      var tile = getTile(x, y);
    }
  }
}