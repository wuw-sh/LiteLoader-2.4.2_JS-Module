import {DirectionAngle, Float, FloatPos, Integer, IntPos} from "../../types";
import {Player} from "./Player";
import {Item} from "./Item";
import {Container} from "./Container";
import {Block} from "./Block";
import {NbtCompound} from "../NBTs";

export class Entity {
    readonly name: string;
    readonly type: string;
    readonly id: Integer;
    readonly pos: FloatPos;
    readonly blockPos: IntPos;
    readonly maxHealth: Integer;
    readonly health: Integer;
    readonly inAir: boolean;
    readonly inWater: boolean;
    readonly speed: Float;
    readonly direction: DirectionAngle;
    readonly uniqueId: string;

    teleport(pos: IntPos | FloatPos): boolean
    teleport(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer): boolean

    kill(): boolean

    hurt(damage: Integer): boolean

    setOnFire(time: Integer): boolean

    isPlayer(): boolean

    toPlayer(): Player | null

    isItemEntity(): boolean

    toItem(): Item

    getBlockStandingOn(): Block

    getArmor(): Container

    hasContainer(): boolean

    getContainer(): Container

    refreshItems(): boolean

    addTag(tag: string): boolean

    removeTag(tag: string): boolean

    hasTag(tag: string): boolean

    getAllTags(): Array<string>

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): boolean

    explode(pos: IntPos | FloatPos, source: Entity | null, range: Float, isDistroy: boolean, isFire: boolean): boolean

    explode(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer, source: Entity | null, range: Float, isDistroy: boolean, isFire: boolean): boolean

    quickEvalMolangScript(str: string): Float
}