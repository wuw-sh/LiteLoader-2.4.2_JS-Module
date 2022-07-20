import {Integer} from "../types/Numbers/Integer";
import {Item} from "./Item";

export class Container {
    size: Integer
    type: String

    addItem(item: Item): Boolean

    addItemToFirstEmptySlot(item: Item): Boolean

    hasRoomFor(item: Item): Boolean

    removeItem(index: Integer, count: Integer): Boolean

    getItem(index: Integer): Item

    setItem(index: Integer, item: Item): Boolean

    getAllItems(): Array<Item>

    removeAllItems(): Boolean

    isEmpty(): Boolean
}