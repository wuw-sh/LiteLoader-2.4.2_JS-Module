import {Integer} from "../../../types";

export class Network {
    httpGet(url: String, callback: (status: Integer, result: String) => void): boolean

    httpPost(url: String, data: String, type: String, callback: (status: Integer, result: String) => void): boolean
}