import {Float, Integer} from "../../types";

export class Device {
    readonly ip: string
    readonly avgPing: Integer
    readonly avgPacketLoss: Float
    readonly lastPing: Integer
    readonly lastPacketLoss: Float
    readonly os: "Android" | "iOS" | "OSX" | "Amazon" | "GearVR" | "Hololens" | "Windows10" | "Win32" | "TVOS" | "PlayStation" | "Nintendo" | "Xbox" | "WindowsPhone" | "Unknown"
    readonly serverAddress: string
    readonly clientId: string
}