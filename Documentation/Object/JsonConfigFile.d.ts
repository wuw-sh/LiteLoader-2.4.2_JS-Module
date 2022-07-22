import {Float, Integer} from "../../types";

export class JsonConfigFile {
    constructor(path: String)
    constructor(path: String, Default: String)

    init(name: String, Default: any): any

    set: (name: String, data: Integer | Float | String | Boolean | Array<any> | Object) => Boolean

    get: (name: String, Default?: any) => any

    delete(name: String): Boolean
}