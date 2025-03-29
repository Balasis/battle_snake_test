// move is called on every turn and returns your next move
// Valid moves are "up", "down", "left", or "right"
// See https://docs.battlesnake.com/api/example-move for available data
export default function move(gameState) {
    let isMoveSafe = {
      up: true,
      down: true,
      left: true,
      right: true
    };
  
    // Prevent moving backwards
    const myHead = gameState.you.body[0];
    const myNeck = gameState.you.body[1];
  
    if (myNeck.x < myHead.x) {
      isMoveSafe.left = false;
    } else if (myNeck.x > myHead.x) {
      isMoveSafe.right = false;
    } else if (myNeck.y < myHead.y) {
      isMoveSafe.down = false;
    } else if (myNeck.y > myHead.y) {
      isMoveSafe.up = false;
    }
  
    // TODO: Add additional logic for boundaries, self-collision, and other snakes
    const safeMoves = Object.keys(isMoveSafe).filter(key => isMoveSafe[key]);
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
  