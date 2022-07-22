export class SimpleForm {
    static setTitle(title: string): SimpleForm

    static setContent(content: string): SimpleForm

    static addButton(text: string): SimpleForm
    static addButton(text: string, image: string): SimpleForm
}