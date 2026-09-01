import type { GameState } from "./types/GameState.ts";

function processGame(gameState: GameState) {
  if (gameState.playerScore > gameState.computerScore) {
    console.log("Player Wins");
  } else {
    console.log("Computer Wins");
  }
}

export { processGame };
