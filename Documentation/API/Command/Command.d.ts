import {Actor, Block, Entity, Item, Player} from "../../Object";
import {FloatPos, IntPos} from "../../../types";

export class Command {
    setAlias(alias: string): boolean

    setEnum(name: string, values: string[]): boolean

    mandatory(name: string, type: ParamType, enumName: string, identifier: string, enumOptions: number): boolean

    optional(name: string, type: ParamType, enumName: string, identifier: string, enumOptions: number): boolean

    overload(params: string[]): boolean

    setCallback(callback: (cmd: string, origin: CommandOrigin, output: CommandOutput, results) => void): boolean

    setup(): boolean
}

export class CommandOutput {
    success(msg: string): boolean

    error(msg: string): boolean

    addMessage(msg: string): boolean
}

export class ParamType {
    Bool: boolean
    Int: number
    Float: number
    string: string
    Actor: Actor[]
    Player: Player[]
    BlockPos: IntPos
    Vec3: FloatPos
    RawText: string
    Message: string
    JsonValue: string
    Item: Item
    Block: Block
    Effect: string
    Enum: string
    SoftEnum: string
    ActorType: string
    Command: string
}

declare class OriginType {
}

export class CommandOrigin {
    type: OriginType
    name: string
    pos: FloatPos
    blockPos: IntPos
    entity: Entity
    player: Player
}