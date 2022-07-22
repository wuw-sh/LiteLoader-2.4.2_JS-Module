export class SimpleForm {
    static setTitle(title: string): SimpleForm

    static setContent(content: string): SimpleForm

    addButton(text: string, image?: string): SimpleForm
}