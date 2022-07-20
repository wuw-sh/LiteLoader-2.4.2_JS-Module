import {DirectionAngle} from "./DirectionAngle";
import {FloatPos} from "./FloatPos";
import {IntPos} from "./IntPos";
import {Integer} from "../types/Numbers/Integer";
import {Float} from "../types/Numbers/Float";

export class Entity {
    name: string;
    type: string;
    id: Integer;
    pos: FloatPos;
    blockPos: IntPos;
    maxHealth: Integer;
    health: Integer;
    inAir: boolean;
    inWater: boolean;
    speed: Float;
    direction: DirectionAngle;
    uniqueId: string;

    teleport(pos: IntPos | FloatPos): Boolean

    teleport(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer): Boolean

    kill(): Boolean

    hurt(damage: Integer): Boolean

    setOnFire(time: Integer): Boolean

    isPlayer(): Boolean

    toPlayer(): Player | Null

    isItemEntity(): Boolean

    toItem(): Item

    getBlockStandingOn(): Block

    getArmor(): Container

    hasContainer(): Boolean

    getContainer(): Container

    refreshItems(): Boolean

    addTag(tag: String): Tag | Boolean

    removeTag(tag: String): Boolean

    hasTag(tag: String): Boolean

    getAllTags(): Array<String>

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): Boolean

    explode(pos: IntPos | FloatPos, source: Entity | Null, range: Float, isDistroy: Boolean, isFire: Boolean): Boolean

    explode(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer, source: Entity | Null, range: Float, isDistroy: Boolean, isFire: Boolean): Boolean

    quickEvalMolangScript(str: String): Float
}