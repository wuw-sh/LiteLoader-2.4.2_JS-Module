import {Command} from "../API/Command/Command";
import {Player} from "../API/Object";
import {Awaitable, EventList} from "../types";
import {Integer} from "../types/Numbers";

export type Level = 0
export type SimpleForm = 0
export type CustomForm = 0

export class mc {
    static getBDSVersion: string
    static getServerProtocolVersion: number
    static setMotd: (motd: String) => boolean
    static setMaxPlayers: (num: Number) => boolean
    static runcmd: (cmd: String) => boolean
    static runcmdEx: (cmd: String) => { success: boolean, msg: string }
    // @ts-ignore
    static newCommand: (cmd: String, description: String, permission: PermType = PermType.Any, flag: Number = 0x80, alias: String = null) => Command
    // @ts-ignore
    static regPlayerCmd: (cmd: String, description: String, callback: (player: Player, args: String[]) => void, level: Integer = 0) => boolean
    static regConsoleCmd: (cmd: String, description: String, callback: (args: String[]) => void) => boolean
    static sendCmdOutput: (output: String) => boolean
    static listen: (<K extends keyof EventList>(event: K, callback: (...args: EventList[K]) => Awaitable<void>) => boolean)
    static getPlayer: (info: String) => Player
    static getOnlinePlayers: () => Player[]
    static broadcast: (msg: String, type: Integer) => boolean
    static explode: explode
    static newItem: newItem
    static newSimpleForm: newSimpleForm
    static newCustomForm: newCustomForm
    static removeScoreObjective: removeScoreObjective
    static clearDisplayObjective: clearDisplayObjective
    static getBlock: getBlock
    static setBlock: setBlock
    static spawnParticle: spawnParticle
}

// export class mc {
//     /**
//      * 获取世界对象
//      * @param dim {string|number} 世界名或维度id
//      * @returns {Level}
//      */
//     static dimToLevel(dim: string | number): Level;
//
//     /**
//      * 插件关闭时需要主动调用，清除boss条等
//      */
//     static close()
//
//     // 💻 服务端设置 API
//     /**
//      * 获取服务器版本
//      * @returns {string} v1.18.30
//      */
//     static getServerVersion(): string
//
//     /**
//      * 获取服务器协议号
//      * @returns {number} v1.18.30
//      */
//     static getServerProtocolVersion(): number
//
//     /**
//      * 设置Motd
//      * @param motd {string} 目标 Motd 字符串
//      * @returns {boolean} 是否成功
//      */
//     static setMotd(motd: string): boolean
//
//     /**
//      * 设置最大玩家数量
//      * @param num {number} 最大玩家数
//      * @returns {boolean} 是否成功
//      */
//     static setMaxPlayers(num: number): boolean
//
//     // 🎨 游戏元素接口文档
//     /**
//      * 执行一条命令并返回是否成功
//      * @param cmd {string} 命令
//      * @returns {boolean} 是否成功
//      */
//     static runcmd(cmd: string): boolean
//
//     /**
//      * 执行一条命令并返回更多信息
//      * @param cmd {string} 命令
//      * @returns {{success: boolean, output: string}} 是否成功与输出信息
//      */
//     static runcmdEx(cmd: string): { success: boolean, output: string }
//
//     /**
//      * 注册一条顶层命令
//      * @param cmd {string} 命令
//      * @param description {string} 描述文本
//      * @param permission=0 {number} 执行所需权限0~2
//      * @param flag=0x80 {number} 默认值
//      * @param alias {number} 命令别名
//      * @returns {Command} 指令对象
//      */
//     static newCommand(cmd: string, description: string, permission: number, flag: number, alias: number): Command
//
//     /**
//      * 注册一个新的玩家命令（假命令）
//      * @param cmd {string} 待注册的命令
//      * @param description {string} 描述文本
//      * @param callback {Function} 注册的这个命令被执行时，接口自动调用的回调函数。
//      * @param [level=0] {number} 默认值
//      * @returns {boolean} 是否成功
//      */
//     static regPlayerCmd(cmd: string, description: string, callback: Function, level: number): boolean
//
//     /**
//      * 注册一个新的玩家命令（假命令）
//      * @param cmd {string} 待注册的命令
//      * @param description {string} 描述文本
//      * @param callback {Function} 注册的这个命令被执行时，接口自动调用的回调函数。
//      * @returns {boolean} 是否成功
//      */
//     static regConsoleCmd(cmd: string, description: string, callback: Function): boolean
//
//     /**
//      * 注册指定的监听函数
//      * @param event {string} 要监听的事件名
//      * @param callback {Function} 注册的监听函数
//      * @returns {boolean} 是否成功监听事件
//      */
//     static listen: <K extends keyof EventList>(event: K, callback: (...args: EventList[K]) => Awaitable<void>) => boolean
//
//     /**
//      * 获取玩家对象
//      * @param info {string} 玩家名/xuid
//      * @returns {Player|null} 玩家对象
//      */
//     static getPlayer(info: string): Player | null
//
//     /**
//      * 获取在线玩家列表
//      * @returns {Player[]} 玩家对象数组
//      */
//     static getOnlinePlayers(): Player[]
//
//     /**
//      * 发给所有玩家一条消息
//      * @param msg {string} 消息内容
//      * @param [type=0] {number} 消息类型
//      * @returns {boolean} 是否成功
//      */
//     static broadcast(msg: string, type: number): boolean
//
//     /**
//      * 在指定位置制造一次爆炸
//      * @param pos {IntPos | FloatPos} 引发爆炸的位置坐标(或者使用x,y,z,dimid来确定实体位置)
//      * @param source {Entity} 设置爆炸来源的实体对象，可以为 Null
//      * @param power {Float} 爆炸的威力值，影响爆炸的伤害大小和破坏范围
//      * @param range {Float} 爆炸的范围半径，影响爆炸的波及范围
//      * @param isDestroy {boolean} 爆炸是否破坏方块
//      * @param isFire {boolean} 爆炸结束后是否留下燃烧的火焰
//      * @returns {boolean} 是否成功制造爆炸
//      */
//     static explode(pos: IntPos | FloatPos, source: Entity, power: number, range: number, isDestroy: boolean, isFire: boolean): boolean
//
//     // 物品对象
//     /**
//      * 生成新的物品对象
//      * @param name {string} 物品的标准类型名，如 minecraft:bread
//      * @param count {number} 物品堆叠数量
//      * @returns {Item|null}
//      */
//     static newItem(name: string, count: number): Item | null
//
//     // 表单窗口相关
//     /**
//      * 构建一个空的简单表单对象
//      * @returns {SimpleForm} 空的简单表单对象
//      */
//     static newSimpleForm(): SimpleForm
//
//     /**
//      * 构建一个空的自定义表单对象
//      * @returns {CustomForm} 空的自定义表单对象
//      */
//     static newCustomForm(): CustomForm
//
//     // 记分榜相关
//     /**
//      * 移除一个已存在的计分项
//      * @param name {string} 计分项名称
//      * @returns {boolean} 是否清除成功
//      */
//     static removeScoreObjective(name: string): boolean
//
//     /**
//      * 使计分项停止显示
//      * @param slot {string} 显示槽位名称字符串，可以为 sidebar/belowname/list
//      * @returns {boolean} 是否清除成功
//      */
//     static clearDisplayObjective(slot: string): boolean
//
//     //📦 方块对象 API
//     /**
//      * 通过坐标获取方块
//      * @param x {number} x
//      * @param y {number} y
//      * @param z {number} z
//      * @param dimid {number} 维度ID
//      * @returns {Block|null} 方块对象
//      */
//     static getBlock(x: number, y: number, z: number, dimid: number): Block | null
//
//     /**
//      * 设置指定位置的方块
//      * @param x {number} x
//      * @param y {number} y
//      * @param z {number} z
//      * @param dimid {number} 维度ID
//      * @param block {string|Block} 要设置成的方块标准类型名（如 minecraft:stone）、方块对象或方块 NBT 数据
//      * @param [tiledata=0] {number} 方块状态值（默认0）
//      * @returns {boolean} 是否成功设置
//      */
//     static setBlock(x: number, y: number, z: number, dimid: number, block: string | Block | NbtCompound, tiledata?: number): boolean
//
//     /**
//      * 在指定位置生成粒子效果
//      * @param x {number} x
//      * @param y {number} y
//      * @param z {number} z
//      * @param dimid {number} 维度ID
//      * @param type {string} 粒子效果名例如 minecraft:heart_particle
//      * @returns {boolean} 是否成功生成
//      */
//     static spawnParticle(x: number, y: number, z: number, dimid: number, type: string): boolean
//
//     protected constructor()
// }