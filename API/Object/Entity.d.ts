import {DirectionAngle, FloatPos, IntPos, NbtCompound} from "../../types";
import {Float, Integer} from "../../types/Numbers";
import {Player} from "./Player";
import {Item} from "./Item";
import {Container} from "./Container";
import {Block} from "./Block";

export class Entity {
    name: String;
    type: String;
    id: Integer;
    pos: FloatPos;
    blockPos: IntPos;
    maxHealth: Integer;
    health: Integer;
    inAir: Boolean;
    inWater: Boolean;
    speed: Float;
    direction: DirectionAngle;
    uniqueId: String;

    teleport(pos: IntPos | FloatPos): Boolean
    teleport(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer): Boolean

    kill(): Boolean

    hurt(damage: Integer): Boolean

    setOnFire(time: Integer): Boolean

    isPlayer(): Boolean

    toPlayer(): Player | null

    isItemEntity(): Boolean

    toItem(): Item

    getBlockStandingOn(): Block

    getArmor(): Container

    hasContainer(): Boolean

    getContainer(): Container

    refreshItems(): Boolean

    addTag(tag: String): Boolean

    removeTag(tag: String): Boolean

    hasTag(tag: String): Boolean

    getAllTags(): Array<String>

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): Boolean

    explode(pos: IntPos | FloatPos, source: Entity | null, range: Float, isDistroy: Boolean, isFire: Boolean): Boolean

    explode(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer, source: Entity | null, range: Float, isDistroy: Boolean, isFire: Boolean): Boolean

    quickEvalMolangScript(str: String): Float
}