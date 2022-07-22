import {Block, Command, CustomForm, Entity, Item, NbtCompound, Player, SimpleForm} from "./Documentation";
import {Awaitable, DisplaySlot, EventList, Float, FloatPos, Integer, IntPos, PermType} from "./types";

export class mc {
    static getBDSVersion(): string

    static getServerProtocolVersion(): number

    static setMotd(motd: string): boolean

    static setMaxPlayers(num: number): boolean

    static runcmd(cmd: string): boolean

    static runcmdEx(cmd: string): { success: boolean, msg: string }

    /**
     * @param cmd
     * @param description
     * @param permission = PermType.Any
     * @param flag = 0x80
     * @param alias = null
     */
    static newCommand(cmd: string, description: string, permission: PermType, flag: number, alias: string): Command

    /**
     * @param cmd
     * @param description
     * @param callback
     * @param level = 0
     */
    static regPlayerCmd(cmd: string, description: string, callback: (player: Player, args: string[]) => void, level: Integer): boolean

    static regConsoleCmd(cmd: string, description: string, callback: (args: string[]) => void): boolean

    static sendCmdOutput(output: string): boolean

    static listen<K extends keyof EventList>(event: K, callback: (...args: EventList[K]) => Awaitable<void>): boolean

    static getPlayer(info: string): Player

    static getOnlinePlayers(): Player[]

    static broadcast(msg: string, type: Integer): boolean

    static explode(x: IntPos | FloatPos, y: IntPos | FloatPos, z: IntPos | FloatPos, dimid: Integer, source: Entity, power: Float, range: Float, isDestroy: boolean, isFire: boolean): boolean

    static newItem(name: string, count: Integer): Item | null

    static newSimpleForm(): SimpleForm

    static newCustomForm(): CustomForm

    static removeScoreobjective(name: string): boolean

    static clearDisplayobjective(slot: DisplaySlot): boolean

    static getBlock(x: IntPos, y: IntPos, z: IntPos, dimid: Integer): Block | null

    static setBlock(x: IntPos, y: IntPos, z: IntPos, dimid: Integer, block: Block | string | NbtCompound, tiledata: Integer): boolean

    static spawnParticle(x: IntPos | FloatPos, y: IntPos | FloatPos, z: IntPos | FloatPos, dimid: Integer, type: string): boolean

    static sendModalForm(title: String, content: String, confirmButton: String, cancelButton: String, callback: (player: Player, result: Boolean) => void): Integer
}