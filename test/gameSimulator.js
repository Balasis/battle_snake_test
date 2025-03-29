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

  // Function to update the game state (like moving the snake)
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
  
    // Update the snake's body (add new head and remove tail)
    this.gameState.you.body.unshift(newHead);
    this.gameState.you.body.pop();
  
    // Update the board's snake data so the printed board reflects the new positions
    // If your board has multiple snakes, you might need to find and update your snake specifically.
    // Here, we'll assume your snake is the only one and it's the first element.
    this.gameState.board.snakes[0] = this.gameState.you;
  
    // console.log("Updated snake body:");
    // this.gameState.you.body.forEach(segment => console.log(segment));
  }


}
