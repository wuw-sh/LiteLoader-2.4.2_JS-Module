import {Integer} from "../../../types";
import {Player} from "../../Object";

export class logger {
    static setConsole(isOpen: Boolean, logLevel: Integer)

    static setFile(filepath: String, logLeve: Integer)

    static setPlayer(player: Player, logLevel: Integer)

    static log(...arg: any)

    static debug(...arg: any)

    static info(...arg: any)

    static warn(...arg: any)

    static error(...arg: any)

    static fatal(...arg: any)

    static setTitle(title: String)

    static setLogLevel(level: Integer)
}