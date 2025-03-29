
export default function checkOtherSnakesCollision(snakeHead, otherSnakes) {
    for (let i = 0; i < otherSnakes.length; i++) {
        const otherSnake = otherSnakes[i];
        for (let j = 0; j < otherSnake.body.length; j++) {
            if (snakeHead.x === otherSnake.body[j].x && snakeHead.y === otherSnake.body[j].y) {
                return true;  // Collision with another snake
            }
        }
    }
    return false;  // No collision
}
