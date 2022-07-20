import {Float, Integer} from "../../types";

export class Device {
    readonly ip: String
    readonly avgPing: Integer
    readonly avgPacketLoss: Float
    readonly lastPing: Integer
    readonly lastPacketLoss: Float
    readonly os: OS
    readonly serverAddress: String
    readonly clientId: String
}

export type OS =
    "Android"
    | "iOS"
    | "OSX"
    | "Amazon"
    | "GearVR"
    | "Hololens"
    | "Windows10"
    | "Win32"
    | "TVOS"
    | "PlayStation"
    | "Nintendo"
    | "Xbox"
    | "WindowsPhone"
    | "Unknown";