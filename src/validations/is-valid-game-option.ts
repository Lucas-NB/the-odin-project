import { validGameOptions } from "../constants/valid-game-options.ts";
import type { GameOption } from "../types/GameOptions.ts";

function isValidGameOption(option: string): option is GameOption {
  return (validGameOptions as readonly string[]).includes(option);
}

export { isValidGameOption };
