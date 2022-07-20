import {Float, Integer} from "../../types/Numbers";
import {FloatPos, IntPos, NbtCompound} from "../../types";
import {Container} from "./Container";
import {BlockEntity} from "./BlockEntity";

export class Block {
    name: string;
    type: string;
    id: Integer;
    pos: IntPos;
    tileData: Integer;

    destroy(drop: Boolean): Boolean

    getNbt(): NbtCompound

    getBlockState(): Object

    hasContainer(): Boolean

    getContainer(): Container

    hasBlockEntity(): Boolean

    getBlockEntity(): BlockEntity

    removeBlockEntity(): Boolean

    setBlock(pos: IntPos, block: Block | String | NbtCompound, tiledata: Integer): Boolean
    setBlock(x: Integer, y: Integer, z: Integer, dimid: Integer, block: Block | String | NbtCompound, tiledata: Integer): Boolean

    spawnParticle(pos: IntPos | FloatPos, type: String): Boolean

    spawnParticle(x: Integer | Float, y: Integer | Float, z: Integer | Float, type: String): Boolean
}