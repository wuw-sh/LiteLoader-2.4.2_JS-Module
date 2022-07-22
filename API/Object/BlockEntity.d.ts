import {IntPos, NbtCompound} from "../../types";
import {Block} from "./Block";

export class BlockEntity {
    readonly pos: IntPos
    readonly type: IntPos

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): boolean

    getBlock(): Block

    getBlock(): Block
}