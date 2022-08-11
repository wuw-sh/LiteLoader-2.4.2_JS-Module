import {ByteBuffer, Float, Integer} from "./types";

export class data {
    static name2xuid(name: String): String | null

    static xuid2name(xuid: String): String | null

    static toJson(Var: Integer | Float | String | Boolean | Array<any> | Object): String | null
    /**
     *
     * @param Var
     * @param space=0
     */
    static toJson(Var: Integer | Float | String | Boolean | Array<any> | Object, space: Integer): String | null

    static parseJson(json: String): any | null

    static toMD5(str: String | ByteBuffer): String

    static toSHA1(str: String | ByteBuffer): String

    static toBase64(str: String | ByteBuffer): String

    static fromBase64(base64: String, isBinary: Boolean): String | ByteBuffer
}