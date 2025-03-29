// move is called on every turn and returns your next move
// Valid moves are "up", "down", "left", or "right"
// See https://docs.battlesnake.com/api/example-move for available data

import { checkWallCollision } from '../logic/collision/boundaries';
import { checkSelfCollision } from '../logic/collision/selfCollision';
import { checkOtherSnakesCollision } from '../logic/collision/otherSnakes';


export default function move(gameState) {
  // Initialize safe moves
  let isMoveSafe = {
    up: true,
    down: true,
    left: true,
    right: true,
  };

  // Get the snake's head and neck positions
  const myHead = gameState.you.body[0];
  const myNeck = gameState.you.body[1];

  // Prevent moving backwards by comparing head and neck positions
  if (myNeck.x < myHead.x) {
    isMoveSafe.left = false;
  } else if (myNeck.x > myHead.x) {
    isMoveSafe.right = false;
  } else if (myNeck.y < myHead.y) {
    isMoveSafe.down = false;
  } else if (myNeck.y > myHead.y) {
    isMoveSafe.up = false;
  }

  // Game state variables
  const boardWidth = gameState.board.width;
  const boardHeight = gameState.board.height;
  const otherSnakes = gameState.board.snakes;

  // Check for collisions with boundaries (walls)
  if (checkWallCollision(myHead, boardWidth, boardHeight)) {
    // If moving out of bounds, remove that direction from safe moves
    if (myHead.x <= 0) isMoveSafe.left = false;
    if (myHead.x >= boardWidth - 1) isMoveSafe.right = false;
    if (myHead.y <= 0) isMoveSafe.down = false;
    if (myHead.y >= boardHeight - 1) isMoveSafe.up = false;
  }

  // Check for self-collision (snake colliding with itself)
  if (checkSelfCollision(myHead, gameState.you.body)) {
    isMoveSafe[Object.keys(isMoveSafe).find(dir => dir === "left" || dir === "right" || dir === "up" || dir === "down")] = false;
  }

  // Check for collisions with other snakes
  if (checkOtherSnakesCollision(myHead, otherSnakes)) {
    isMoveSafe[Object.keys(isMoveSafe).find(dir => dir === "left" || dir === "right" || dir === "up" || dir === "down")] = false;
  }

  // Filter out the unsafe moves
  const safeMoves = Object.keys(isMoveSafe).filter(key => isMoveSafe[key]);

  // If no safe moves are available, choose a fallback move (e.g., moving down)
  if (safeMoves.length === 0) {
    console.log(`MOVE ${gameState.turn}: No safe moves detected! Moving down`);
    return { move: "down" };
  }

  // Choose a random safe move
  const nextMove = safeMoves[Math.floor(Math.random() * safeMoves.length)];
  console.log(`MOVE ${gameState.turn}: ${nextMove}`);
  return { move: nextMove };
}





   // TODO: Step 1 - Prevent your Battlesnake from moving out of bounds
  // boardWidth = gameState.board.width;
  // boardHeight = gameState.board.height;

  // TODO: Step 2 - Prevent your Battlesnake from colliding with itself
  // myBody = gameState.you.body;

  // TODO: Step 3 - Prevent your Battlesnake from colliding with other Battlesnakes
  // opponents = gameState.board.snakes;
  