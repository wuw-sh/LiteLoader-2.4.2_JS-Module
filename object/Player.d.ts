import {FloatPos} from "./FloatPos";
import {IntPos} from "./IntPos";
import {DirectionAngle} from "./DirectionAngle";
import {Integer} from "../types/Numbers/Integer";
import {Float} from "../types/Numbers/Float";
import {Entity} from "./Entity";

export class Player extends Entity {
    name: string;
    pos: FloatPos;
    blockPos: IntPos;
    lastDeathPos: IntPos;
    realName: string;
    xuid: string;
    uuid: string;
    permLevel: Integer;
    gameMode: Integer;
    maxHealth: Integer;
    health: Integer;
    inAir: boolean;
    inWater: boolean;
    sneaking: boolean;
    speed: Float;
    direction: DirectionAngle;
    uniqueId: string;
    isLoading: boolean;
}