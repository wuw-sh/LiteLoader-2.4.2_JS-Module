import {Integer} from "../types/Numbers/Integer";
import {IntPos} from "./IntPos";
import {NBTCompound} from "../libs/mc";
import {FloatPos} from "./FloatPos";
import {Container} from "./Container";
import {BlockEntity} from "./BlockEntity";
import {Float} from "../types/Numbers/Float";

export class Block {
    name: string;
    type: string;
    id: Integer;
    pos: IntPos;
    tileData: Integer;

    destroy(drop: Boolean): Boolean

    getNbt(): NBTCompound

    getBlockState(): Object

    hasContainer(): Boolean

    getContainer(): Container

    hasBlockEntity(): Boolean

    getBlockEntity(): BlockEntity

    removeBlockEntity(): Boolean

    setBlock(pos: IntPos, block: Block | String | NBTCompound, tiledata: Integer ): Boolean

    setBlock(x: Integer, y: Integer, z: Integer, dimid: Integer, block: Block | String | NBTCompound, tiledata: Integer ): Boolean

    spawnParticle(pos: IntPos | FloatPos, type: String): Boolean

    spawnParticle(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer, type: String): Boolean
}