import type { PlayHandler } from "./types/play-handler.ts";
import type { GameState } from "./types/GameState.ts";
import { gameOver } from "./game-over.ts";
import { playRound } from "./play-round.ts";
import { processGame } from "./process-game.ts";

function playGame(
  playerPlayHandler: PlayHandler,
  computerPlayHandler: PlayHandler,
) {
  const gameState: GameState = {
    playerScore: 0,
    computerScore: 0,
    playerChoice: null,
    computerChoice: null,
  };
  while (!gameOver(gameState)) {
    playRound(playerPlayHandler, computerPlayHandler, gameState);
  }

  processGame(gameState);
}

export { playGame };
