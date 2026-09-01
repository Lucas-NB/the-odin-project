import { playGame } from "./play-game.ts";
import { getHumanChoice } from "./get-human-choice.ts";
import { getComputerChoice } from "./get-computer-choice.ts";

playGame(getHumanChoice, getComputerChoice);
