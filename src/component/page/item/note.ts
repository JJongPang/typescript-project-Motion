import { BaseComponent } from './../../components.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
    
    constructor(title: string, body: string) {
        super(
            `
            <section class="note">
                <h2 class="note__title"></h2>
                <p class="note__body"></p>
            </section>
            `
        )

        const noteTitleElement = this.element.querySelector('.note__title')! as HTMLHeadElement;
        noteTitleElement.textContent = title;

        const noteBodyElement = this.element.querySelector('.note__body')! as HTMLParagraphElement;
        noteBodyElement.textContent = body;
    }
}