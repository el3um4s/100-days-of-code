// dimensioni immagini: 101 x 171

var record = 0;
var score = 0;

// Elenco delle righe dove posso mettere i nemici
var rowsEnemy = [60, 140, 230];
// Elenco delle velocità possibili per i nemici
var speeds = [75, 100, 125, 150, 175, 200];
//              0   1   2   3   4   5   6   7
var rowGrid = [-100, -20, 60, 140, 230, 310, 390, 500];
var colGrid = [-100, 0, 100, 200, 300, 400, 500, 700];

function setScore(num) {
  score = num;
  var span = document.getElementById("scoreGame");
  span.innerHTML = score;
}

function changeBackgroundColor(win) {
  if (!win) {
    document.body.style.backgroundColor = "#181818";
  } else {
    document.body.style.backgroundColor = ["#B3E5FC", "#BBDEFB", "#ffcdd2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#FFE0B2", "#D7CCC8", "#e57373", "#F06292", "#BA68C8", "#9575CD", "#7986CB", "#64B5F6", "#4FC3F7", "#4DD0E1", "#4DB6AC", "#81C784", "#AED581", "#DCE775", "#FFF176", "#FFD54F", "#FFB74D","#FF8A65","#E0E0E0"].randomElement();
  }
}

function setRecord(num) {
  if (num > record) {
    record = num;
    var span = document.getElementById("recordGame");
    span.innerHTML = record;
  }
}

// per scegliere un elemento a caso da un'array
Array.prototype.randomElement = function() {
  return this[Math.floor(Math.random() * this.length)]
}

// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
  this.x = [-400, -300, -200, -150, -250].randomElement();;
  this.y = rowsEnemy.randomElement();
  this.speed = speeds.randomElement();
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  this.x += dt * this.speed;
  // se si trova fuori dalla scacchiera allora sposto il nemico a sinistra
  if (this.x > 500) {
    this.x = [-400, -300, -200, -150, -250].randomElement();
    // imposta una riga e una velocità a caso
    this.y = rowsEnemy.randomElement();
    this.speed = speeds.randomElement();
    // decido se fare apparire un nuovo nemico oppure se eliminarne uno
    /*var caso = Math.random();
    if (allEnemies.length <= 4){
      allEnemies.push(new Enemy());
    } else if (caso < (1 / allEnemies.length / 100)) {
      allEnemies.push(new Enemy());
    }*/
  }

  // TODO controllare se bacarozzo colpisce il giocatore
  var a = this.x - player.x;
  var b = this.y - player.y;
  var distanceFromPlayer = Math.sqrt(a * a + b * b);
  if (distanceFromPlayer <= 50) {
    // sposta il giocatore al punto di partenza
    setScore(0);
    changeBackgroundColor(false);
    player.row = 6;
    player.col = 3;
    player.x = colGrid[player.col];
    player.y = rowGrid[player.row];
    allEnemies.splice(3);
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(col, row) {
  this.sprite = 'images/char-boy.png';
  this.col = col;
  this.row = row;
  this.x = colGrid[this.col];
  this.y = rowGrid[this.row];
};

Player.prototype.update = function(dt) {};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  if (key === 'left') {
    this.col = (this.col === 1) ? 1 : this.col - 1;
    this.x = colGrid[this.col];
  }

  if (key === 'up') {
    this.row = (this.row === 1) ? 1 : this.row - 1;
    this.y = rowGrid[this.row];
    if (this.row === 1) {
      // sposta il giocatore al punto di partenza
      setScore(score + 1);
      changeBackgroundColor(true);
      setRecord(score);
      this.row = 6;
      this.col = 3;
      this.x = colGrid[this.col];
      this.y = rowGrid[this.row];
      // aggiungo un nemico
      allEnemies.push(new Enemy());
    }
  }

  if (key === 'right') {
    this.col = (this.col === 5) ? 5 : this.col + 1;
    this.x = colGrid[this.col];
  }

  if (key === 'down') {
    this.row = (this.row === 6) ? 6 : this.row + 1;
    this.y = rowGrid[this.row];
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player(3, 6);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
