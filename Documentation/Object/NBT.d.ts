import {NBT} from "../NBT";
import {Integer} from "../../types";

export class NBTObjectGenericInterface {
    getType(): NBT

    toString(space: Integer): String
}

