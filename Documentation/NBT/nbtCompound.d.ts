import {NBT} from "./nbtType";
import {Byte, ByteBuffer, Double, Float, Integer, Long, Short} from "../../types";
import {NbtList} from "./nbtList";

export class NbtCompound {
    constructor(data: Object)

    getKeys(): Array<String>

    getTypeOf(key: String): NBT | null

    setTag(key: String, tag: NBT): Boolean

    getTag(key: String): NBT

    removeTag(key: String): NbtCompound

    setEnd(key: String): NbtCompound

    setByte(key: String, data: Byte): NbtCompound

    setShort(key: String, data: Short): NbtCompound

    setInt(key: String, data: Integer): NbtCompound

    setLong(key: String, data: Long): NbtCompound

    setFloat(key: String, data: Float): NbtCompound

    setDouble(key: String, data: Double): NbtCompound

    setByteArray(key: String, data: Byte[]): NbtCompound

    setString(key: String, data: String): NbtCompound

    getData(key: String): any | NbtList | NbtCompound | null

    toObject(): Object

    toSNBT(space: Integer): String

    toBinaryNBT(): ByteBuffer

    destroy(): Boolean


}