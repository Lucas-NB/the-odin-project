import type { GameState } from "./types/GameState.ts";

function gameOver(gameState: GameState): boolean {
  return gameState.playerScore === 5 || gameState.computerScore === 5;
}

export { gameOver };
