import {Integer} from "../../../types";

export class CustomForm {
    static setTitle(title: String): CustomForm

    static addLabel(text: string): CustomForm

    static addInput(title: string): CustomForm
    static addInput(title: string, placeholder: string): CustomForm
    static addInput(title: string, placeholder: string, Default: string): CustomForm

    static addSwitch(title: string): CustomForm
    static addSwitch(title: string, Default: boolean): CustomForm

    static addDropdown(title: string, items: string[]): CustomForm
    /**
     *
     * @param title
     * @param items
     * @param Default=0
     */
    static addDropdown(title: string, items: string[], Default: Integer): CustomForm

    static addSlider(title: string, min: Integer, max: Integer): CustomForm
    /**
     *
     * @param title
     * @param min
     * @param max
     * @param step=1
     */
    static addSlider(title: string, min: Integer, max: Integer, step: Integer): CustomForm
    /**
     *
     * @param title
     * @param min
     * @param max
     * @param step=1
     * @param Default=0
     */
    static addSlider(title: string, min: Integer, max: Integer, step: Integer, Default: Integer): CustomForm

    static addStepSlider(title: string, items: string[]): CustomForm
    /**
     *
     * @param title
     * @param items
     * @param Default=0
     */
    static addStepSlider(title: string, items: string[], Default: Integer): CustomForm

}