import {IntPos, NbtCompound} from "../../types";
import {Block} from "./Block";

export class BlockEntity {
    pos: IntPos
    type: IntPos

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): Boolean

    getBlock(): Block

    getBlock(): Block
}