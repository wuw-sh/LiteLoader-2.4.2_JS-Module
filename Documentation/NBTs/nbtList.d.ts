import {NBT} from "./nbtType";
import {Byte, ByteBuffer, Double, Float, Integer, Long, Short} from "../../types";
import {NbtCompound} from "./nbtCompound";

export class NbtList {

    constructor(data: Array<NBT>)

    getSize(): Integer

    getTypeOf(index: Integer): NBT | null

    setTag(index: Integer, tag: NBT): NbtList

    getTag(index: Integer): NbtList

    addTag(tag: NBT): NbtList

    removeTag(index: Integer): NbtList

    setEnd(index: Integer): NbtList

    setByte(index: Integer, data: Byte): NbtList

    setShort(index: Integer, data: Short): NbtList

    setInt(index: Integer, data: Integer): NbtList

    setLong(index: Integer, data: Long): NbtList

    setFloat(index: Integer, data: Float): NbtList

    setDouble(index: Integer, data: Double): NbtList

    setByteBuffer(index: Integer, data: ByteBuffer): NbtList

    setString(index: Integer, data: String): NbtList

    getData(index: Integer): Number | Float | Double | ByteBuffer | String | NbtList | NbtCompound | null

    toArray(): Array<NbtList | NbtCompound>
}