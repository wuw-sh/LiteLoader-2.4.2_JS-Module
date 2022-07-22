import {NBT} from "../NBTs";
import {Integer} from "../../types";

export class NBTObjectGenericInterface {
    getType(): NBT

    toString(space: Integer): String
}

