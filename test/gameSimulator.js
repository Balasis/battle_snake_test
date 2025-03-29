import move from '../src/handlers/move.js';

export default class GameSimulator {
  constructor(initialGameState) {
    this.gameState = initialGameState; // Store the game state
    this.turn = 0; // Track the current turn
  }

  // Function to simulate one turn
  playTurn() {
    this.turn++;
    console.log(`Turn ${this.turn}:`);
    const result = move(this.gameState); // Get the move from the move function
    
    // Update the game state here after making the move
    this.updateGameState(result.move);

  }

  updateGameState(move) {
    const head = this.gameState.you.body[0];
    let newHead;
  
    // Update the head position based on the move
    if (move === 'up') {
      newHead = { x: head.x, y: head.y - 1 };
    } else if (move === 'down') {
      newHead = { x: head.x, y: head.y + 1 };
    } else if (move === 'left') {
      newHead = { x: head.x - 1, y: head.y };
    } else if (move === 'right') {
      newHead = { x: head.x + 1, y: head.y };
    }
  
    // Check if new head position is on food
    let ateFood = false;
    for (let i = 0; i < this.gameState.board.food.length; i++) {
      const food = this.gameState.board.food[i];
      if (food.x === newHead.x && food.y === newHead.y) {
        ateFood = true;
        // Remove the eaten food from the board
        this.gameState.board.food.splice(i, 1);
        break;
      }
    }
  
    // Update the snake's body:
    // Add the new head to the front
    this.gameState.you.body.unshift(newHead);
    // Only remove the tail if no food was eaten (if eaten, snake grows)
    if (!ateFood) {
      this.gameState.you.body.pop();
    } else {
      console.log("Food eaten! Snake grows.");
      // Optionally, you can spawn new food here
      // e.g., this.spawnNewFood();
    }
  
    // Update the board's snake data so the printed board reflects the new positions
    // If your board has multiple snakes, you may need to update the correct snake.
    // Here we assume your snake is the only one and is the first element.
    this.gameState.board.snakes[0] = this.gameState.you;
  
    // For debugging, log the updated snake body:
    console.log("Updated snake body:");
    this.gameState.you.body.forEach(segment => console.log(segment));
  }


}
