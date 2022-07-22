import {DirectionAngle, Float, FloatPos, Integer, IntPos} from "../../types";
import {Entity} from "./Entity";
import {Block} from "./Block";
import {Item} from "./Item";
import {Container} from "./Container";
import {Device} from "./DeviceInfo";
import {SimpleForm} from "../API";
import {NbtCompound} from "../NBTs";

export class Player extends Entity {
    readonly name: string;
    readonly pos: FloatPos;
    readonly blockPos: IntPos;
    readonly lastDeathPos: IntPos;
    readonly realName: string;
    readonly xuid: string;
    readonly uuid: string;
    readonly permLevel: Integer;
    readonly gameMode: Integer;
    readonly maxHealth: Integer;
    readonly health: Integer;
    readonly inAir: boolean;
    readonly inWater: boolean;
    readonly sneaking: boolean;
    readonly speed: Float;
    readonly direction: DirectionAngle;
    readonly uniqueId: string;
    readonly isLoading: boolean;

    isOP(): boolean

    kick(msg: string): boolean

    disconnect(msg: string): boolean

    tell(msg: string, type: Integer): boolean

    sendText(msg: string, type: Integer): boolean

    sendToast(title: string, message: string): boolean

    runcmd(cmd: string): boolean

    talkAs(text: string): boolean
    talkAs(target: Player | string, text: string): boolean

    teleport(pos: IntPos | FloatPos): boolean
    teleport(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer): boolean

    kill(): boolean

    hurt(damage: Integer): boolean

    setOnFire(time: Integer): boolean

    rename(nename: string): boolean

    getBlockStandingOn(): Block

    getDevice(): Device

    getHand(): Item

    getOffHand(): Item

    getInventory(): Container

    getArmor(): Container

    getEnderChest(): Container

    getRespawnPosition(): IntPos

    setRespawnPosition(pos: IntPos): boolean
    setRespawnPosition(x: Integer, y: Integer, z: Integer, dimid: Integer): boolean

    giveItem(item: Item): boolean

    clearItem(type: string): Integer

    refreshItems(): boolean

    refreshChunks(): boolean

    setPermLevel(level: Integer): boolean

    setGameMode(mode: Integer): boolean

    addLevel(count: Integer): boolean

    reduceLevel(count: Integer): boolean

    getLevel(): Integer

    setLevel(count: Integer): boolean

    resetLevel(): boolean

    getCurrentExperience(): boolean

    setCurrentExperience(count: Integer): boolean

    getTotalExperience(): Integer
    getTotalExperience(count: Integer): boolean

    addExperience(count: Integer): boolean

    reduceExperience(count: Integer): boolean

    getXpNeededForNextLevel(): Integer

    transServer(server: string, port: Integer): boolean

    crash(): boolean

    /**
     * @param title
     * @param data
     * @param sortOrder = 1
     */
    setSidebar(title: string, data: {}, sortOrder: number): boolean

    removeSidebar(): boolean

    setBossBar(uid: number, title: string, percent: Integer, colour: Integer): boolean

    removeBossBar(uid: number): boolean

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): boolean

    addTag(tag: string): boolean

    removeTag(tag: string): boolean

    hasTag(tag: string): boolean

    getAllTags(): Array<string>

    getAbilities(): { string, any }

    getAttributes(): Array<object>

    isSprinting(): boolean

    setSprinting(sprinting: boolean): boolean

    /**
     * Send Form
     */
    sendForm(fm: SimpleForm, callback: (player: Player, id: Integer) => void): Integer | null

}