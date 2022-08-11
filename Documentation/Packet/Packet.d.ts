import {Float, FloatPos, Integer} from "../../types";
import {NbtCompound} from "../NBT";

export class Packet {
    getName(): string

    getId(): Integer
}

export class BinaryStream {

    reset(): Boolean

    writeBool(value: Boolean): Boolean

    writeByte(value: Integer): Boolean

    writeDouble(value: Number): Boolean

    writeFloat(value: Float): Float

    writeSignedBigEndianInt(value: Number): Boolean

    writeSignedInt(value: Number): Boolean

    writeSignedInt64(value: Number): Boolean

    writeSignedShort(value: Integer): Boolean

    writestring(value: string): Boolean

    writeUnsignedChar(value: Integer): Boolean

    writeUnsignedInt(value: Number): Boolean

    writeUnsignedInt64(value: Number): Boolean

    writeUnsignedShort(value: Integer): Boolean

    writeUnsignedVarInt(value: Number): Boolean

    writeUnsignedVarInt64(value: Number): Boolean

    writeVarInt(value: number): Boolean

    writeVarInt64(value: number): Boolean

    writeVec3(value: FloatPos): Boolean

    writeCompountTag(value: NbtCompound): Boolean

    createPacket(pktid: Integer): Packet
}