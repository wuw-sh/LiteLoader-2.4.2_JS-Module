import {Float, Integer} from "../../types";

export class KVDatabase {
    constructor(dir: String)

    set(name: String, data: Integer | Float | String | Boolean | Array<any> | Object)

    get(name: String): any | null

    delete(name: String): Boolean

    listKey(): Array<any>

    close(): Boolean
}