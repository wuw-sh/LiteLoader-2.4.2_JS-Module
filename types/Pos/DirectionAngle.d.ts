import {Float, Integer} from "../Numbers";

export class DirectionAngle {
    /**
     * Return | Pitch angle (-90° ~ 90°): Float
     */
    pitch: Float;
    /**
     * Return | Yaw angle (rotation angle): Float
     */
    yaw: Float;

    /**
     * Return | The basic orientation indicated by the current bearing object: Integer
     */
    toFacing(): Integer
}
