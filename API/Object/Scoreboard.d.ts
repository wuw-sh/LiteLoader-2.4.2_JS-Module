import {Integer} from "../../types";
import {Player} from "./Player";

export class ScoreBoard {
    readonly name: string
    readonly displayName: string

    getScore(target: Player | string): Integer

    setScore(target: Player | string, score: Integer): Integer

    addScore(target: Player | string, score: Integer): Integer

    reduceScore(target: Player | string, score: Integer): Integer

    deleteScore(target: string | Player): boolean

    setDisplay(slot: string, sortOrder: Integer)
}