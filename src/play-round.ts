import type { PlayHandler } from "./types/play-handler.ts";
import type { GameState } from "./types/GameState.ts";

function playRound(
  playerPlayHandler: PlayHandler,
  computerPlayHandler: PlayHandler,
  gameState: GameState,
): GameState {
  const playerChoice = playerPlayHandler();
  const computerChoice = computerPlayHandler();

  if (playerChoice === computerChoice) {
    return gameState;
  }

  if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    gameState.playerScore++;
    console.log("player win", gameState.playerScore, gameState.computerScore);
    return gameState;
  }

  gameState.computerScore++;
  console.log("Loose win", gameState.playerScore, gameState.computerScore);

  return gameState;
}

export { playRound };
