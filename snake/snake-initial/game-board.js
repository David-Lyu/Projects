import { snakeSpeed, update as updateSnake, draw as drawSnake, 
    getSnakeHead, snakeIntersection} from './components/snake.js'
import { update as updateFood, draw as drawFood } from './components/food.js';
import { outsideGrid } from './components/grid.js'
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");


function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/';
        }
        return;
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    if(secondsSinceLastRender < 1 / snakeSpeed) {
        return
    }
    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main)

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}