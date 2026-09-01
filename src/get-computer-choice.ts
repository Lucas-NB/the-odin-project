import type { GameOption } from "./types/GameOptions";

function getComputerChoice(): GameOption {
  const computerOptions: GameOption[] = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);

  const computerChoice = computerOptions.at(randomNumber);

  if (computerChoice === undefined) {
    throw new Error("Invalid choice selected");
  }

  return computerChoice;
}

export { getComputerChoice };
