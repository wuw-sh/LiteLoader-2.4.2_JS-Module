import {Integer} from "../../../types";

export class money {
    static set(xuid: String, money: Integer): Boolean

    static get(xuid: String): Integer

    static add(xuid: String, Integer): Boolean

    static reduce(xuid: String, money: Integer): Boolean

    static trans(xuid1: String, xuid2: String, money: Integer)
    static trans(xuid1: String, xuid2: String, money: Integer, note: String)

    static getHistory(xuid: String, time: Integer): Array<Object>

    static clearHistory(time: String): Boolean
}