import {Integer} from "../../types/Numbers";
import {Player} from "./Player";

export class ScoreBoard {
    name: String
    displayName: String

    getScore(target: Player | String): Integer

    setScore(target: Player | String, score: Integer): Integer

    addScore(target: Player | String, score: Integer): Integer

    reduceScore(target: Player | String, score: Integer): Integer

    deleteScore(target: String | Player): Boolean

    setDisplay(slot: String, sortOrder: Integer)
}