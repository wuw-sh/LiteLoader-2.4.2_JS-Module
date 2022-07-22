import {Float, Integer} from "../Numbers";

export class FloatPos extends Float {
    /**
     * Return | x coordinate: Float
     */
    x: Float

    /**
     * Return | y coordinate: Float
     */
    y: Float

    /**
     * Return | z coordinate: Float
     */
    z: Float

    /**
     * Return | Dimension Name: string
     */
    dim: string

    /**
     * Return | Dimension ID: Integer
     */
    dimid: Integer
}