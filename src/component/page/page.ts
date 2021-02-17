import { Componet } from './../components';
import { BaseComponent } from "../components.js";

export interface Composable {
   addChild(child: Componet): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
    constructor() {
        super(
            `<li class="page-item">
                <section class="page-item__body">
                    <div class="page-item__controls">
                        <span class="close"> &times; </span>
                    </div>
                </section>
            </li>`
        )
    }

    addChild(child: Componet) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }
}

export class PageComponet extends BaseComponent<HTMLUListElement> implements Composable {
    constructor() {
        super('<ul class="page">/ul>');
    }

    addChild(section: Componet) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
    }
}