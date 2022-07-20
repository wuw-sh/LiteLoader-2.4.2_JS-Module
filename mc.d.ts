import {Block, Command, CustomForm, Entity, Item, Player, SimpleForm} from "./API";
import {Awaitable, DisplaySlot, EventList, Float, FloatPos, Integer, IntPos, NbtCompound, PermType} from "./types";

export class mc {
    static getBDSVersion(): string

    static getServerProtocolVersion(): number

    static setMotd(motd: String): boolean

    static setMaxPlayers(num: Number): boolean

    static runcmd(cmd: String): boolean

    static runcmdEx(cmd: String): { success: boolean, msg: string }

    /**
     * @param cmd
     * @param description
     * @param permission = PermType.Any
     * @param flag = 0x80
     * @param alias = null
     */
    static newCommand(cmd: String, description: String, permission: PermType, flag: Number, alias: String): Command

    /**
     * @param cmd
     * @param description
     * @param callback
     * @param level = 0
     */
    static regPlayerCmd(cmd: String, description: String, callback: (player: Player, args: String[]) => void, level: Integer): boolean

    static regConsoleCmd(cmd: String, description: String, callback: (args: String[]) => void): boolean

    static sendCmdOutput(output: String): boolean

    static listen<K extends keyof EventList>(event: K, callback: (...args: EventList[K]) => Awaitable<void>): boolean

    static getPlayer(info: String): Player

    static getOnlinePlayers(): Player[]

    static broadcast(msg: String, type: Integer): boolean

    static explode(x: IntPos | FloatPos, y: IntPos | FloatPos, z: IntPos | FloatPos, dimid: Integer, source: Entity, power: Float, range: Float, isDestroy: Boolean, isFire: Boolean): boolean

    static newItem(name: String, count: Integer): Item | null

    static newSimpleForm(): SimpleForm

    static newCustomForm(): CustomForm

    static removeScoreObjective(name: String): boolean

    static clearDisplayObjective(slot: DisplaySlot): boolean

    static getBlock(x: IntPos, y: IntPos, z: IntPos, dimid: Integer): Block | null

    static setBlock(x: IntPos, y: IntPos, z: IntPos, dimid: Integer, block: Block | String | NbtCompound, tiledata: Integer): boolean

    static spawnParticle(x: IntPos | FloatPos, y: IntPos | FloatPos, z: IntPos | FloatPos, dimid: Integer, type: String): boolean
}