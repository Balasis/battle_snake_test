
export default function checkWallCollision(snakeHead, boardWidth, boardHeight) {
    if (snakeHead.x < 0 || snakeHead.x >= boardWidth || snakeHead.y < 0 || snakeHead.y >= boardHeight) {
        return true;  // Collision with wall
    }
    return false;  // No collision
}
