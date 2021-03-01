import { BaseComponent } from './../component.js';


export class PageComponent extends BaseComponent<HTMLUListElement> {
    // private element: HTMLUListElement;
    constructor() {
        // this.element = document.createElement('ul');
        // this.element.setAttribute('class', 'page');
        // this.element.textContent = 'This is PageComponent';
        super('<ul class="page">This is PageComponent!</ul>');
    }
    // attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    //     parent.insertAdjacentElement(position, this.element);
    // }
}