import {IntPos} from "../../types";
import {Block} from "./Block";
import {NbtCompound} from "../NBT";

export class BlockEntity {
    readonly pos: IntPos
    readonly type: IntPos

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): boolean

    getBlock(): Block

    getBlock(): Block
}