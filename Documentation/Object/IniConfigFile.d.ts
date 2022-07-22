import {Float, Integer} from "../../types";

export class IniConfigFile {
    constructor(path: String)
    constructor(path: String, Default: String)

    init(section: String, name: String, Default: Integer | Float | String | Boolean): any

    set(section: String, name: String, data: Integer | Float | String | Boolean)

    getStr(section: String, name: String): String
    getStr(section: String, name: String, Default: String): String

    getInt(section: String, name: String): Integer
    getInt(section: String, name: String, Default: Integer): Integer

    getFloat(section: String, name: String): Float
    getFloat(section: String, name: String, Default: Float): Float

    getBool(section: String, name: String): Boolean
    getBool(section: String, name: String, Default: Boolean): Boolean

    delete(section: String, name: String): Boolean

    /**
     * Whether the load was successful
     */
    reload()

    /**
     * Whether the load was successful
     */
    close()

    getPath(): String

    read(): String

    write(content: String): Boolean
}