import { getInputDirection } from './input.js'
export let snakeSpeed = 5;

const snakeBody = [
    { x: 11, y: 11 },
    { x: 11, y: 12 },
    { x: 11, y: 13 },
];

let newSegments = 0;

export function update() {
    addSegments();
    const inputDirection= getInputDirection();
        for (let i = snakeBody.length - 2; i >= 0; i--) {
            snakeBody[i+1] = {...snakeBody[i]};
        }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake');
        gameBoard.appendChild(snakeElement);
    })
}

export function expandSnake(amount) {
    newSegments += amount;
    if(snakeSpeed !== 25){
        snakeSpeed += 0.5
    }
}

export function onSnake(position, { ignoreHead = false } = {}) {
    // console.log(position, arguments[1])
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0 ) return false;
        return equalPositions(segment, position);
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(getSnakeHead(), { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }

    newSegments = 0;
}
