import {ByteBuffer, Integer} from "../Type";

export class WS_eventList {
    onTextReceived: (msg: String) => void
    onBinaryReceived: (data: ByteBuffer) => void
    onError: (msg: String) => void
    onLostConnection: (code: Integer) => void
}