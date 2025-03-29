
export function checkSelfCollision(snakeHead, snakeBody) {
    // Check if snake's head is colliding with its body
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeHead.x === snakeBody[i].x && snakeHead.y === snakeBody[i].y) {
            return true;  // Collision with itself
        }
    }
    return false;  // No collision
}
