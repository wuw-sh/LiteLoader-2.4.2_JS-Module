import {Integer} from "../../../types";

export class system {
    /**
     *@param cmd
     * @param callback
     *@param timeLimit = -1
     */
    static cmd: (cmd: String, callback: (exitcode: Integer, output: String) => void, timeLimit?: Integer) => boolean

    /**
     * @param process
     * @param callback
     * @param timeLimit = -1
     */
    static newProcess: (process: String, callback: (exitcode: Integer, output: String) => void, timeLimit?: Integer) => boolean

    static getTimeStr: () => string

    static getTimeObj: () => {
        Y: Integer,
        M: Integer,
        D: Integer,
        h: Integer,
        m: Integer,
        s: Integer,
        ms: Integer
    }

    static randomGuid: () => string
}