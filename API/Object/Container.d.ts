import {Integer} from "../../types";
import {Item} from "./Item";

export class Container {
    readonly size: Integer
    readonly type: string

    addItem(item: Item): boolean

    addItemToFirstEmptySlot(item: Item): boolean

    hasRoomFor(item: Item): boolean

    removeItem(index: Integer, count: Integer): boolean

    getItem(index: Integer): Item

    setItem(index: Integer, item: Item): boolean

    getAllItems(): Array<Item>

    removeAllItems(): boolean

    isEmpty(): boolean
}