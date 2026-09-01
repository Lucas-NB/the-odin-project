import type { GameOption } from "./GameOptions.ts";

type GameState = {
  playerScore: number;
  computerScore: number;
  playerChoice: GameOption | null;
  computerChoice: GameOption | null;
};

export type { GameState };
