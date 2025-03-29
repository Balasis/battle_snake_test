import GameSimulator from './gameSimulator.js';
// Initialize the game state
const initialGameState = {
    turn: 0,
    board: {
      width: 11,
      height: 11,
      food: [{ x: 5, y: 6 }, { x: 2, y: 3 },{ x: 1, y: 3 },{ x: 5, y: 3 }],
      snakes: [
        {
          id: 'snake1',
          body: [
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 4, y: 2 }
          ],
          head: { x: 3, y: 1 }
        }
      ]
    },
    you: {
      id: 'snake1',
      body: [
        { x: 3, y: 1 },
        { x: 3, y: 2 },
        { x: 4, y: 2 }
      ],
      head: { x: 3, y: 1 }
    }
  };
  
  // Create a new game simulator
  const simulator = new GameSimulator(initialGameState);
  
  // Simulate 10 turns
  for (let i = 0; i < 10; i++) {
    simulator.playTurn();
  }
  