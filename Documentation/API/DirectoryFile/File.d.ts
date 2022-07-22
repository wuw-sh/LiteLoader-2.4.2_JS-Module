import {ByteBuffer, Integer} from "../../../types";
import {file} from "../../../types/Permissions/PermOpenMode";

export class File {
    static readFrom(path: String): String | null

    static writeTo(path: String, text: String): Boolean

    static writeLine(path: String, text: String): Boolean

    constructor(path: String, mode: file)
    /**
     *
     * @param path
     * @param mode
     * @param isBinary=false
     */
    constructor(path: String, mode: file, isBinary: Boolean)

    path: String

    absolutePath: String

    size: Integer

    readSync(cnt): String | ByteBuffer | null

    readLineSync(): String | null

    readAllSync(): String | ByteBuffer | null

    writeSync(str: String | ByteBuffer): Boolean

    writeLineSync(str: String): Boolean

    read(cnt: Number, callback: (result: String | ByteBuffer | null) => {}): Boolean

    readLine(callback: (result: String) => {}): Boolean

    readAll(callback: (result: String | ByteBuffer | null) => {}): Boolean

    write(str: String | ByteBuffer): Boolean
    write(str: String | ByteBuffer, callback: (result: Boolean) => {}): Boolean

    writeLine(str: String | ByteBuffer): Boolean
    writeLine(str: String | ByteBuffer, callback: (result: Boolean) => {}): Boolean

    seekTo(pos: Number, isRelative: Boolean): Boolean

    setSize(size: Number): Boolean

    close(): Boolean

    isEOF(): Boolean

    flush(): Boolean

    errorCode(): Integer

    clear(): Boolean

    static createDir(dir: String): Boolean

    static mkdir(dir: String): Boolean

    static delete(path: String): Boolean

    static exists(path: String): Boolean

    static copy(from: String, to: String): Boolean

    static move(form: String, to: String): Boolean

    static rename(form: String, to: String): Boolean

    static getFileSize(path): Integer

    static checkIsDir(path: String): Boolean

    static getFilesList(dir: String): Array<String>
}