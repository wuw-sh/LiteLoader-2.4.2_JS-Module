import {Byte, Double, Float, Integer} from "../../types";

export class NbtEnd {
}

export class NbtByte {
    data: Byte;

    constructor(data: Byte) {
        this.data = data;
    }

    get: Byte

    set: (data: Byte) => boolean
}


export class NbtShort {
    data: Integer;

    constructor(data: Integer) {
        this.data = data;
    }

    get: Integer

    set: (data: Integer) => boolean
}

export class NbtInt {
    data: Integer;

    constructor(data: Integer) {
        this.data = data;
    }

    get: Integer

    set: (data: Integer) => boolean
}

export class NbtLong {
    data: Number

    constructor(data: Number) {
        this.data = data;
    }

    get: Number

    set: (data: Number) => boolean
}

export class NbtFloat {
    data: Float

    constructor(data: Float) {
        this.data = data;
    }

    get: Float

    set: (data: Float) => boolean
}

export class NbtDouble {
    data: Double

    constructor(data: Double) {
        this.data = data;
    }

    get: Double

    set: (data: Double) => boolean
}

export class NbtByteArray {
    dat: Byte[]

    constructor(data: Byte[]) {
        this.dat = data;
    }

    get: Byte[]

    set: (data: Byte[]) => boolean
}

export class NbtString {
    data: String

    constructor(data: String) {
        this.data = data;
    }

    get: String

    set: (data: String) => boolean
}



