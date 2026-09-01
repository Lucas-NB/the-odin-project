import type { validGameOptions } from "../constants/valid-game-options.ts";

type GameOption = (typeof validGameOptions)[number];

export type { GameOption };
