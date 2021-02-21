import { PageComponet } from './page/page';
export interface Componet {
    attachTo(parent: HTMLElement, position?: InsertPosition): void;
    removeFrom(parent: HTMLElement): void;
}

//Encapsulate the HTML element creation
export class BaseComponent<T extends HTMLElement> implements Componet {
    protected readonly element: T;

    constructor(htmlString: string) {
        const template = document.createElement('template');
        template.innerHTML = htmlString;
        this.element = template.content.firstElementChild! as T;
    }

    attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }

    removeFrom(parent: HTMLElement) {
        if(parent !== this.element.parentElement) {
            throw new Error('Check Parent mismatch!');
        }
        parent.removeChild(this.element);
    }

    checkChild(parent: HTMLElement) {
        if(parent !== this.element.parentElement) {
            throw new Error('Check Parent Mismatch!');
        }
        parent !== this.element.parentElement {
            throw new Error('check parent');
        }
    }
}