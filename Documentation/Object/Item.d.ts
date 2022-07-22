import {FloatPos, Integer, IntPos} from "../../types";
import {Entity} from "./Entity";
import {NbtCompound} from "../NBTs";

export class Item {
    readonly name: string;
    readonly type: string;
    readonly id: Integer;
    readonly count: Integer;
    readonly aux: Integer;

    isNull(): boolean;

    setNull(): boolean

    set(item: Item): boolean;

    setAux(aux: Integer): boolean

    spawnItem(item: Item, pos: IntPos | FloatPos): Entity

    spawnItem(item: Item, x: IntPos | FloatPos, y: IntPos | FloatPos, z: IntPos | FloatPos, dimid: Integer): Entity

    getNbt(): NbtCompound

    setNbt(nbt: NbtCompound): boolean

    setLore(names: Array<string>): boolean;
}