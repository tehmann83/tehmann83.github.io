/*
 ******************************** ENEMY **********************************
 */
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * 200);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position. Parameter: dt is a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    this.startingPos = -100;
    if (this.x > 909) {
        this.x = this.startingPos;
        this.speed = difficultyLevel * Math.floor(Math.random() * 200);
    }
    if (player.x <= (this.x + 50) &&
        player.y <= (this.y + 41) &&
        this.x <= (player.x + 50) &&
        this.y <= (player.y + 41)
    ) {
        player.playSound('bug');
        player.playerHearts -= 1;
        player.resetPlayer();
    }
};

// Starting level of difficulty
var difficultyLevel = 1;

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
 ******************************** PLAYER **********************************
 */
// Initializing position and sprite/image. Start the player at 400x by 400y
var Player = function() {
    this.startingX = 400;
    this.startingY = 400;
    this.x = this.startingX;
    this.y = this.startingY;
    this.randomCharacter();
    this.playerScore = 0;
    this.playerHearts = 5;
    this.audio = {
      bug: new Audio("audio/bug.wav"),
      gem: new Audio("audio/gem.wav"),
      heart: new Audio("audio/heart.wav"),
      move: new Audio("audio/move.wav"),
      splash: new Audio("audio/splash.wav")
    };
};

// Switching sound effects
Player.prototype.playSound = function(sound) {
  switch (sound) {
    case 'bug':
      this.audio.bug.play();
      break;
    case 'gem':
      this.audio.gem.play();
      break;
    case 'heart':
      this.audio.heart.play();
      break;
    case 'splash':
      this.audio.splash.play();
      break;
    case 'move':
      this.audio.move.play();
      break;
  }
};

// Randomizing player character. Each has a 25% chance to be played with.
Player.prototype.randomCharacter = function() {
  var randomCharacter = Math.random();
  if (randomCharacter <= 0.25){
    this.sprite = 'images/char-horn-girl.png';
  } else if (randomCharacter <= 0.5){
    this.sprite = 'images/char-boy.png';
  } else if (randomCharacter <= 0.75){
    this.sprite = 'images/char-cat-girl.png';
  } else this.sprite = 'images/char-pink-girl.png';
};

// Check if playerHearts is 0, reset game
Player.prototype.update = function() {
    if (this.playerHearts === 0) {
    reset();
    }
};

// Resets the player position to the starting position
Player.prototype.resetPlayer = function(x,y) {
    this.x = this.startingX;
    this.y = this.startingY;
};


// Draw player and add scoreboard
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.scoreboard();
  };

Player.prototype.scoreboard = function() {
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.font = "30pt Impact";
  ctx.fillText("Score: " + player.playerScore, 420, 580);
  ctx.fillText("Hearts: " + player.playerHearts, 105, 580);
  ctx.fillText("Level: " + Math.floor(difficultyLevel), 745, 580);
  ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
  ctx.lineWidth = 5;
  ctx.strokeText("Score: " + player.playerScore, 420, 580);
  ctx.strokeText("Hearts: " + player.playerHearts, 105, 580);
  ctx.strokeText("Level: " + Math.floor(difficultyLevel), 745, 580);

};

// Defining keys to move player
Player.prototype.handleInput = function(allowedKeys) {
  switch (allowedKeys) {
    case "up":
      if (this.y < 10) {
        this.playerScore += 101;
        difficultyLevel += 0.1;
        this.playSound('splash');
        this.resetPlayer();
      } else {
        this.y -= 83;
        this.playSound('move');
      }
      break;
    case "down":
      if (this.y < 400) {
        this.y += 83;
        this.playSound('move');
      }
      break;
    case "left":
      if (this.x > 0) {
        this.x -= 101;
        this.playSound('move');
      }
      break;
    case "right":
      if (this.x < 800) {
        this.x += 101;
        this.playSound('move');
      }
      break;
    }
};

/*
 ******************************** OBJECTS **********************************
 */

/******************** GEMStones *******************/

var Gem = function(x,y) {
    this.x = x;
    this.y = y;
    this.generateGem();
    this.delayGem;
};

var blueGem = 'images/GemBlue.png',
    greenGem = 'images/GemGreen.png',
    orangeGem ='images/GemOrange.png';

// Generates random Gemstones with different values
Gem.prototype.generateGem = function() {
  var generateGem = Math.random();
  if (generateGem <= 0.5) {
    this.sprite = orangeGem;
    this.value = 27;
  } else if (generateGem <= 0.8) {
    this.sprite = greenGem;
    this.value = 53;
  } else {
    this.sprite = blueGem;
    this.value = 113;
  }
};

// Update gem if collected
Gem.prototype.update = function() {
  if (player.x <= (this.x + 50) &&
      player.y <= (this.y + 41) &&
      this.x <= (player.x + 50) &&
      this.y <= (player.y + 41)
    ) {
        // Gem collected, hide gem, add score, call delay function
        this.x = -100;
        this.y = -100;
        player.playSound('gem');
        player.playerScore += this.value;
        this.delay();
  }
};

// Draw gem to the screen
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Call setTimeout, next gem appears after 3 seconds.
Gem.prototype.delay = function() {
    this.delayGem = setTimeout( function() {
      gem.resetGem();
    }, 3000);
};

// Random gem appears at random position
Gem.prototype.resetGem = function() {
    this.generateGem();
    this.x = (101 * Math.floor(Math.random() * 9) + 0);
    this.y = (60 + (85 * Math.floor(Math.random() * 3) + 0));
};

/******************** HEARTS *******************/

var Heart = function(x,y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/Heart.png';
  this.delayHeart;
};

// Update heart if collected
Heart.prototype.update = function() {
  if (player.x <= (this.x + 50) &&
      player.y <= (this.y + 41) &&
      this.x <= (player.x + 50) &&
      this.y <= (player.y + 41) ) {
        this.x = -100;
        this.y = -100;
        player.playSound('heart');
        player.playerHearts += 1;
        this.delay();
  }
};

// Draw heart to the screen
Heart.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Call setTimeout, next heart appears in 17 seconds.
Heart.prototype.delay = function() {
    this.delayHeart = setTimeout( function() {
        heart.resetHeart();
    }, 17000);
};

// Function to place heart object to a random location
Heart.prototype.resetHeart = function() {
    this.x = (101 * Math.floor(Math.random() * 9) + 0);
    this.y = (70 + (85 * Math.floor(Math.random() * 3) + 0));
};

 // Place all enemy objects in an array called allEnemies
var allEnemies = [];
 // Place the player object in a variable called player
var player = new Player();

// Instantiate all enemies, push to allEnemies array
for (var i = 0; i < 4; i++) {
    var startSpeed = Math.floor(Math.random() * 200);
    //2 enemies per row
    allEnemies.push(new Enemy(-100, 60 + (85 * i), startSpeed));
    allEnemies.push(new Enemy(-200, 60 + (85 * i), startSpeed));
}

// Instantiate gem
var gem = new Gem (101 * Math.floor(Math.random() * 4), 60 +
    (85 * Math.floor(Math.random() * 3) + 0));

// Instantiate heart
var heart = new Heart (101 * Math.floor(Math.random() * 4), 70 +
    (85 * Math.floor(Math.random() * 3) + 0));

/*
 ******************************** EVENT LISTENER  *******************************
 */

// Listens for key presses and sends the keys to Player.handleInput() method.
document.addEventListener('keyup', input);
var input = function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
};
