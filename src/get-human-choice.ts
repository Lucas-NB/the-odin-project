import type { GameOption } from "./types/GameOptions.ts";
import { isValidGameOption } from "./validations/is-valid-game-option.ts";

function getHumanChoice(): GameOption {
  const userInput = prompt("Make a choice: rock paper scissor");

  if (userInput === null) {
    throw new Error("Missing user input");
  }

  if (!isValidGameOption(userInput)) {
    throw new Error("Invalid user input");
  }

  return userInput;
}

export { getHumanChoice };
