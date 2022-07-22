import {Integer} from "../../../types";

export class CustomForm {
    setTitle(title: String): CustomForm

    addLabel(text: string): CustomForm

    addInput(title: string, placeholder?: string, Default?: string)

    addSwitch(title: string, Default?: boolean): CustomForm

    addDropdown(title: string, items: string[], Default?: Integer): CustomForm

    addSlider(title: string, min: Integer, max: Integer, step?: Integer, Default?: Integer): CustomForm

    addStepSlider(title: string, items: string[], Default?: Integer): CustomForm

}