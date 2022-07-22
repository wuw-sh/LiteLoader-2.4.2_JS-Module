import {Float, FloatPos, Integer, IntPos} from "../../types";
import {Container} from "./Container";
import {BlockEntity} from "./BlockEntity"
import {NbtCompound} from "../NBT";

export class Block {
    readonly name: string;
    readonly type: string;
    readonly id: Integer;
    readonly pos: IntPos;
    readonly tileData: Integer;

    destroy(drop: boolean): boolean

    getNbt(): NbtCompound

    getBlockState(): object

    hasContainer(): boolean

    getContainer(): Container

    hasBlockEntity(): boolean

    getBlockEntity(): BlockEntity

    removeBlockEntity(): boolean

    setBlock(pos: IntPos, block: Block | string | NbtCompound, tiledata: Integer): boolean
    setBlock(x: Integer, y: Integer, z: Integer, dimid: Integer, block: Block | string | NbtCompound, tiledata: Integer): boolean

    spawnParticle(pos: IntPos | FloatPos, type: string): boolean

    spawnParticle(x: Integer | Float, y: Integer | Float, z: Integer | Float, type: string): boolean
}