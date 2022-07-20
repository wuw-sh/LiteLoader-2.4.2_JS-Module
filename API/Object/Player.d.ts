import {DirectionAngle, FloatPos, IntPos, NbtCompound} from "../../types";
import {Float, Integer} from "../../types/Numbers";
import {Entity} from "./Entity";
import {Block} from "./Block";
import {Item} from "./Item";
import {Container} from "./Container";
import {Device} from "./DeviceInfo";

export class Player extends Entity {
    pos: FloatPos;
    blockPos: IntPos;
    lastDeathPos: IntPos;
    realName: String;
    xuid: String;
    uuid: String;
    permLevel: Integer;
    gameMode: Integer;
    maxHealth: Integer;
    health: Integer;
    sneaking: Boolean;
    speed: Float;
    direction: DirectionAngle;
    isLoading: Boolean;

    isOP(): Boolean

    kick(msg: String): Boolean

    disconnect(msg: String): Boolean

    tell(msg: String, type: Integer): Boolean

    sendText(msg: String, type: Integer): Boolean

    sendToast(title: String, message: String): Boolean

    runcmd(cmd: String): Boolean

    talkAs(text: String): Boolean
    talkAs(target: Player | String, text: String): Boolean

    teleport(pos: IntPos | FloatPos): Boolean
    teleport(x: Integer | Float, y: Integer | Float, z: Integer | Float, dimid: Integer): Boolean

    kill(): Boolean

    hurt(damage: Integer): Boolean

    setOnFire(time: Integer): Boolean

    rename(nename: String): Boolean

    getBlockStandingOn(): Block

    getDevice(): Device

    getHand(): Item

    getOffHand(): Item

    getInventory(): Container

    getArmor(): Container

    getEnderChest(): Container

    getRespawnPosition(): IntPos

    setRespawnPosition(pos: IntPos): Boolean
    setRespawnPosition(x: Integer, y: Integer, z: Integer, dimid: Integer): Boolean

    giveItem(item: Item): Boolean

    clearItem(type: String): Integer

    refreshItems(): Boolean

    refreshChunks(): Boolean

    setPermLevel(level: Integer): Boolean

    setGameMode(mode: Integer): Boolean

    addLevel(count: Integer): Boolean

    reduceLevel(count: Integer): Boolean

    getLevel(): Integer

    setLevel(count: Integer): Boolean

    resetLevel(): Boolean

    getCurrentExperience(): Boolean

    setCurrentExperience(count: Integer): Boolean

    getTotalExperience(): Integer
    getTotalExperience(count: Integer): Boolean

    addExperience(count: Integer): Boolean

    reduceExperience(count: Integer): Boolean

    getXpNeededForNextLevel(): Integer

    transServer(server: String, port: Integer): Boolean

    crash(): Boolean

    /**
     * @param title
     * @param data
     * @param sortOrder = 1
     */

    setSidebar(title: String, data: {}, sortOrder : Number): Boolean

    removeSidebar(): Boolean

    setBossBar(uid: Number, title: String, percent: Integer, colour: Integer): Boolean

    removeBossBar(uid: Number): Boolean

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): Boolean

    addTag(tag: String): Boolean

    removeTag(tag: String): Boolean

    hasTag(tag: String): Boolean

    getAllTags(): Array<String>

    getAbilities(): {String, any}

    getAttributes(): Array<Object>

    isSprinting(): Boolean

    setSprinting(sprinting: Boolean): Boolean

 }