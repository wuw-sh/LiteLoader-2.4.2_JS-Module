import {Player} from "../object/Player";
import {Actor} from "../object/Actor";
import {IntPos} from "../object/IntPos";
import {FloatPos} from "../object/FloatPos";
import {Item} from "../object/Item";
import {Block} from "../object/Block";
import {Entity} from "../object/Entity";

export declare class Command {
    setAlias(alias: string): boolean

    setEnum(name: string, values: string[]): boolean

    mandatory(name: string, type: ParamType, enumName: string, identifier: string, enumOptions: number): boolean

    optional(name: string, type: ParamType, enumName: string, identifier: string, enumOptions: number): boolean

    overload(params: string[]): boolean

    setCallback(callback: (cmd: string, origin: CommandOrigin, output: CommandOutput, results) => {}): boolean

    setup(): boolean
}

export declare class CommandOutput {
    static success(msg: string): boolean

    static error(msg: string): boolean

    static addMessage(msg: string): boolean
}

export declare class ParamType {
    static Bool: boolean
    static Int: number
    static Float: number
    static String: string
    static Actor: Actor[]
    static Player: Player[]
    static BlockPos: IntPos
    static Vec3: FloatPos
    static RawText: string
    static Message: string
    static JsonValue: string
    static Item: Item
    static Block: Block
    static Effect: string
    static Enum: string
    static SoftEnum: string
    static ActorType: string
    static Command: string
}

declare class OriginType {
}

export declare class CommandOrigin {
    static type: OriginType
    static name: string
    static pos: FloatPos
    static blockPos: IntPos
    static entity: Entity
    static player: Player
}