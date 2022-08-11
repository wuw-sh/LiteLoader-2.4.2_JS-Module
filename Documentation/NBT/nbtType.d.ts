import {NbtByte, NbtByteArray, NbtDouble, NbtEnd, NbtFloat, NbtInt, NbtLong, NbtShort, NbtString} from "./nbtNormal";
import {NbtCompound} from "./nbtCompound";
import {NbtList} from "./nbtList";
import {ByteBuffer} from "../../types";

export interface NBT {
    End: NbtEnd,
    Byte: NbtByte,
    Short: NbtShort,
    Int: NbtInt,
    Long: NbtLong,
    Float: NbtFloat,
    Double: NbtDouble,
    ByteArray: NbtByteArray,
    String: NbtString,
    List: NbtList,
    Compound: NbtCompound

    parseSNBT(snbt: String): NbtCompound

    parseBinaryNBT(nbt: ByteBuffer): NbtCompound | null
}