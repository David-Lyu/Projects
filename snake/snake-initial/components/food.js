import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition();
const expansionRate = 1;

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate);
        food = getRandomFoodPosition();
    }
}

function getRandomFoodPosition() {
    let newFoodPos = null;
    while (newFoodPos === null || onSnake(newFoodPos)) {
        newFoodPos = randomGridPosition();
    }
    return newFoodPos;
}

