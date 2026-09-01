import type { GameOption } from "./GameOptions.ts";

type PlayHandler = (...args: unknown[]) => GameOption;

export type { PlayHandler };
