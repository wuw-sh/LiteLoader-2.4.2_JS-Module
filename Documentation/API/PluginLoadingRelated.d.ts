import {Integer} from "../../types";

export class ll {
    static version(): Object

    static versionString(): String

    static requireVersion(major: Integer, minor: Integer, revision: Integer): Boolean

    static listPlugins(): Array<String>

    static export(func: Function, name: String): Boolean
    static export(func: Function, namespace: String, name: String): Boolean

    static import(name: String): Function
    static import(namespace: String, name: String): Function

    static require(path: String, remotePath: String): Boolean

    static eval(str: String): any
    
}