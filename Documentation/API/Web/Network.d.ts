import {Integer} from "../../../types";

export class network {
    static httpGet(url: String, callback: (status: Integer, result: String) => void): boolean

    static httpPost(url: String, data: String, type: String, callback: (status: Integer, result: String) => void): boolean
}