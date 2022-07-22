import {ByteBuffer, Integer, WebsocketStatus, WS_eventList} from "../../../types";

export class WSClient {
    status: WebsocketStatus

    connect(target: String): boolean

    connectAsync(target: String, callback: (success: Boolean) => void): boolean

    send(msg: String | ByteBuffer): boolean

    listen<K extends keyof WS_eventList>(event: K, callback: WS_eventList[K]): boolean

    close(): boolean

    shutdown(): boolean

    errorCode(): Integer
}