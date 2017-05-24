/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */

var Engine = (function(global) {
    /* Predefine the variables we'll be using within this scope,
     * create the canvas element, grab the 2D context for that canvas
     * set the canvas elements height/width and add it to the DOM.
     */
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 909;
    canvas.height = 606;
    doc.body.appendChild(canvas);

    /* This function serves as the kickoff point for the game loop itself
     * and handles properly calling the update and render methods.
     */
    function main() {
        /* Get our time delta information which is required if your game
         * requires smooth animation. Because everyone's computer processes
         * instructions at different speeds we need a constant value that
         * would be the same for everyone (regardless of how fast their
         * computer is) - hurray time!
         */
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        /* Call our update/render functions, pass along the time delta to
         * our update function since it may be used for smooth animation.
         */
        update(dt);
        render();

        /* Set our lastTime variable which is used to determine the time delta
         * for the next time this function is called.
         */
        lastTime = now;

        /* Use the browser's requestAnimationFrame function to call this
         * function again as soon as the browser is able to draw another frame.
         */
        win.requestAnimationFrame(main);
    }

    /* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
    function init() {
        lastTime = Date.now();
        main();
    }

    // Status from where the game kicks off
    var currentGameState = "initGame";

    /* This function is called by main (our game loop) and itself calls all
     * of the functions which may need to update entity's data. Based on how
     * you implement your collision detection (when two entities occupy the
     * same space, for instance when your character should die), you may find
     * the need to add an additional function call here. For now, we've left
     * it commented out - you may or may not want to implement this
     * functionality this way (you could just implement collision detection
     * on the entities themselves within your app.js file).
     */
 /* Very special thanks to the forum mentors @sarah_m and @Stacy for this one */
    function update(dt) {
        // Change state of game according to event
        switch (currentGameState) {
            case "initGame":
                // Turn the keypress event listener in app.js off
                document.removeEventListener("keyup", input);
                // Listen for enter key, switch game state to playGame when pressed
                var startInput = function(e) {
                    // Use e.which or e.keyCode for browser compatibility
                    var key = e.which || e.keyCode;
                    // Enter key changes game state to "playGame"
                    if (key === 13) {
                        currentGameState = "playGame";
                    }
                };
                document.addEventListener("keydown", startInput);
                break;
            // Game is running, updateEntities is the main activity
            case "playGame":
                // Turn the keypress event listener in app.js back on
                document.addEventListener('keyup', input);
                // Call updateEntities to update each entity in the game
                updateEntities(dt);
                // Player head staying rendered behind top tiles
                ctx.clearRect(0,0,canvas.width,canvas.height);
                break;
            case "gameOver":
                // Turn the keypress event listener in app.js off
                document.removeEventListener('keyup', input);
                // Listen for enter key, switch game state to playGame when pressed
                var gameoverInput = function(e) {
                    var key = e.which || e.keyCode;
                    if (key === 13) {
                        currentGameState = "playGame";
                    }
                };
                document.addEventListener("keydown", gameoverInput);
                break;
        }
    }

    /* This is called by the update function  and loops through all of the
     * objects within your allEnemies array as defined in app.js and calls
     * their update() methods. It will then call the update function for your
     * player object. These update methods should focus purely on updating
     * the data/properties related to  the object. Do your drawing in your
     * render methods.
     */
    function updateEntities(dt) {
        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update();
        gem.update();
        heart.update();
    }

    /* This function initially draws the "game level", it will then call
     * the renderEntities function. Remember, this function is called every
     * game tick (or loop of the game engine) because that's how games work -
     * they are flipbooks creating the illusion of animation but in reality
     * they are just drawing the entire screen over and over.
     */
    function render() {
      var grass = 'images/grass-block.png';
      var stone = 'images/stone-block.png';
      var water = 'images/water-block.png';
    // Render different game states according to each case
    switch (currentGameState) {
        case "initGame":
            var rowImages = [water, grass, grass, grass, grass, stone],
                numRows = 6,
                numCols = 9,
                row, col;
            for (row = 0; row < numRows; row++) {
                for (col = 0; col < numCols; col++) {
                    ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);

                    // Text to display on welcome screen
                    ctx.font = "144pt Impact";
                    ctx.textAlign = "center";
                    ctx.fillStyle = "white";
                    ctx.fillText("SPLASHR", canvas.width / 2, canvas.height / 1.8);

                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 6;
                    ctx.strokeText("SPLASHR", canvas.width / 2, canvas.height / 1.8);

                    ctx.fillStyle = "white";
                    ctx.font = "36pt Impact";
                    ctx.textAlign = "center";
                    ctx.fillText("Your dad called it Frogger", canvas.width / 2, canvas.height / 1.45);

                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 3;
                    ctx.strokeText("Your dad called it Frogger", canvas.width / 2, canvas.height / 1.45);

                    ctx.fillStyle = "red";
                    ctx.font = "bold 40pt serif";
                    ctx.textAlign = "center";
                    ctx.fillText("Press Enter To Start", canvas.width / 2, canvas.height / 1.15);
                }
            }
            break;
        case "playGame":
            rowImages = [water, grass, grass, grass, grass, stone],
                numRows = 6,
                numCols = 9;
            for (row = 0; row < numRows; row++) {
                for (col = 0; col < numCols; col++) {
                    ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
                }
            }
            renderEntities();
            break;
        case "gameOver":
            rowImages = [water, grass, grass, grass, grass, stone],
                numRows = 6,
                numCols = 9;

            for (row = 0; row < numRows; row++) {
                for (col = 0; col < numCols; col++) {
                    ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
                    // Game Over text
                    ctx.font = "144pt Impact";
                    ctx.fillStyle = "white";
                    ctx.textAlign = "center";
                    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 1.8);

                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 6;
                    ctx.strokeText("Game Over", canvas.width / 2, canvas.height / 1.8);

                    ctx.font = "bold 40pt serif";
                    ctx.fillStyle = "red";
                    ctx.textAlign = "center";
                    ctx.fillText("Play again? Press Enter.", canvas.width / 2, canvas.height / 1.15);
                }
            }
            break;
            }
    }

    /* This function is called by the render function and is called on each game
     * tick. It's purpose is to then call the render functions you have defined
     * on your enemy and player entities within app.js
     */
    function renderEntities() {
        /* Loop through all of the objects within the allEnemies array and call
         * the render function you have defined.
         */
        allEnemies.forEach(function(enemy) {
            enemy.render();
        });

        player.render();
        gem.render();
        heart.render();
    }

    /* This function does nothing but it could have been a good place to
     * handle game reset states - maybe a new game menu or a game over screen
     * those sorts of things. It's only called once by the init() method.
     */
    //Reset the game to its original state and change currentGameState to gameOver
    function reset() {
        currentGameState = "gameOver";
        player.resetPlayer();
        player.randomCharacter();
        heart.resetHeart();
        clearTimeout(heart.delayHeart);
        gem.resetGem();
        clearTimeout(gem.delayGem);
        difficultyLevel = 1;
        player.playerScore = 0;
        player.playerHearts = 5;
        allEnemies = [];
        // Instantiate all enemies, push to allEnemies array
        for (var i = 0; i < 4; i++) {
            var startSpeed = difficultyLevel * Math.floor(Math.random() * 200);
            allEnemies.push(new Enemy(-100, 60 + (85 * i), startSpeed));
            allEnemies.push(new Enemy(-200, 60 + (85 * i), startSpeed));
        }
    }

    // Loading all images needed
    Resources.load([
      'images/char-boy.png',
      'images/char-cat-girl.png',
      'images/char-horn-girl.png',
      'images/char-pink-girl.png',
      'images/enemy-bug.png',
      'images/GemBlue.png',
      'images/GemGreen.png',
      'images/GemOrange.png',
      'images/grass-block.png',
      'images/Heart.png',
      'images/stone-block.png',
      'images/water-block.png'
    ]);
    Resources.onReady(init);

    /* Assign the canvas' context object and the reset function to the global
     * variable (the window object when run in a browser) so that developer's
     * can use it more easily from within their app.js files.
     */
    global.ctx = ctx;
    global.reset = reset;
})(this);
