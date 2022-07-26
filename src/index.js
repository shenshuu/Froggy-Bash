import Bubble from './scripts/bubble';
import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", () => {
    
    const canvas = document.querySelector('.game-canvas');
    const ctx = canvas.getContext('2d');
    const gameMusic = document.querySelector('.game-music');

    const start = document.querySelector('.start-btn button');
    const startScreen = document.querySelector('.modal');
    const restart = document.querySelector('.restart-btn');
    const restartScreen = document.querySelector('.restart-modal');
    const win = document.querySelector('.win-btn');
    const winScreen = document.querySelector('.win-modal');
    const spicyButton = document.querySelector('.spicy-btn');
    const instructions = document.querySelector('#instructions-nav');

    var gameStarted = false;

    instructions.addEventListener('mouseover', () => {
        if (gameStarted) {
            startScreen.classList.remove('hidden');
            start.classList.add('hidden');
        }
    });

    instructions.addEventListener('mouseout', () => {
        if (gameStarted) {
            startScreen.classList.add('hidden');
        }
    });

    let interval;

    let game = new Game(canvas, ctx);
    let toggleSound = document.querySelector('.sound');
    let soundPlaying;

    toggleSound.addEventListener('click', () => {
        if (soundPlaying) {
            gameMusic.pause();
            soundPlaying = false;
            toggleSound.removeChild(toggleSound.children[0]);
            toggleSound.innerHTML = '<div class="sound-icon"><i class="fa-solid fa-volume-off"></i></div>';
        } else {
            gameMusic.play();
            soundPlaying = true;
            toggleSound.removeChild(toggleSound.children[0]);
            toggleSound.innerHTML = '<div class="sound-icon"><i class="fa-solid fa-volume-high"></i></div>';
        }
    });

    restart.addEventListener('click', () => {
        restartScreen.classList.add('hidden');
        game = new Game(canvas, ctx);
        clearInterval(interval);
        if (soundPlaying) gameMusic.play();
    });

    win.addEventListener('click', () => {
        winScreen.classList.add('hidden');
        game = new Game(canvas, ctx);
        if (soundPlaying) gameMusic.play();
    });

    start.addEventListener('click', () => {
        startScreen.classList.add('hidden');
        gameMusic.play();
        soundPlaying = true;
        animate();
    });

    spicyButton.addEventListener('click', () => {
        game = new Game(canvas, ctx);
        interval = setInterval(() => {
            if (Math.random() < 0.6 && game.enemies.length > 0) {
                let bubble = new Bubble({
                    position: {
                        x: Math.random() * canvas.width,
                        y: 30, 
                    },
                    velocity: {
                        x: (Math.random() < 0.5) ? -1.5 : 1.5, 
                        y: Math.random() + 1.7,
                    },
                    radius: Math.random() * (10-5) + 5,
                    ctx: ctx,
                    sprites: game.enemies[0].sprites,
                    canvas: canvas,
                });
                game.enemies.push(bubble);
            }
        }, 5000);
    });

    function animate() {
        window.requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        gameStarted = true;

        if (game.isGameOver()) {
            gameMusic.pause();
            clearInterval(interval);
            restartScreen.classList.remove('hidden');
            return;
        }

        if (game.enemies.length === 0) {
            gameMusic.pause();
            clearInterval(interval);
            winScreen.classList.remove('hidden');
            return;
        }

        game.update();
        if (game.player.missile && !game.player.missile.reseted) {
            game.player.missile.update();
        }

         if (game.player.missile && game.player.missile.position.y <= 2.5) {
            game.player.missile = null;
        }

        for (let enemy of game.enemies) {
            
            if (enemy.velocity.x <= 0) {
                enemy.image = enemy.sprites.frogLeft.image; 
                enemy.offset = {
                    x: enemy.radius * 5,
                    y: enemy.radius * 6
                };
            } else {
                enemy.image = enemy.sprites.frogRight.image;
                enemy.offset = {
                    x: enemy.radius * 3.3, 
                    y: enemy.radius * 6
                };
            }

            enemy.update();
            game.player.killedBy(enemy);

            if (game.player.missile && game.player.missile.collided(enemy)) {
                game.player.missile = null;
                if (enemy.children.length === 0) {
                    enemy.split();
                    for (let child of enemy.children) {
                        game.enemies.push(child);
                    }
                    game.enemies = game.enemies.filter((bub) => bub !== enemy);
                }
            }
        }
   
        game.player.velocity = 0;
        game.player.framesMax = 6;
        if (game.player.lastKey === 'd') {
            game.player.image = game.player.sprites.idleRight.image;
        } else {
            game.player.image = game.player.sprites.idleLeft.image;
        }

        if (game.player.keys.a.pressed && game.player.lastKey === 'a' ||
        game.player.keys.ArrowLeft.pressed && game.player.lastKey === 'ArrowLeft') {
            game.player.image = game.player.sprites.runLeft.image;
            game.player.framesMax = 10;
            game.player.velocity = -1.55;
        } else if (game.player.keys.d.pressed && game.player.lastKey === 'd' ||
        game.player.keys.ArrowRight.pressed && game.player.lastKey === 'ArrowRight') {
            game.player.image = game.player.sprites.runRight.image;
            game.player.framesMax = 10;
            game.player.velocity = 1.55;
        } 
    }

  
})
