import { BaseComponent } from './../../components.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
    
    constructor(title: string, todo: string) {
        super(
            `
            <section class="todo">
                <h2 class="note__title"></h2>
                <input type="checkbox" class="todo-checkbox" />
            </section>
            `
        )

        const toDoTitleElement = this.element.querySelector('.note__title')! as HTMLHeadElement;
        toDoTitleElement.textContent = title;

        const todoBodyElement = this.element.querySelector('.todo-checkbox')! as HTMLInputElement;
        todoBodyElement.insertAdjacentText('afterend', todo);
    }
}