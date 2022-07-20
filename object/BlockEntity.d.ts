import {NbtCompound} from "../types/NBT-List/NbtCompound";
import {IntPos} from "./IntPos";
import {Block} from "./Block";

export class BlockEntity {
    pos: IntPos
    type: IntPos

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): Boolean

    getBlock(): Block

    getBlock(): Block
}