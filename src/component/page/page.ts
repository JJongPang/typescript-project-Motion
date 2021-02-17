import { Componet } from './../components';
import { BaseComponent } from "../components.js";

export interface Composable {
   addChild(child: Componet): void;
}

type OnCloseListener = () => void;

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
    private closeListener?: OnCloseListener 

    constructor() {
        super(
            `<li class="page-item">
                <section class="page-item__body">
                    <div class="page-item__controls">
                        <button class="close"> &times; </button>
                    </div>
                </section>
            </li>`);

        const closeButton = this.element.querySelector(".close")! as HTMLButtonElement;
        closeButton.onclick = () => {
            this.closeListener && this.closeListener();
        }
    }

    addChild(child: Componet) {
        const container = this.element.querySelector('.page-item__body')! as HTMLElement;
        child.attachTo(container);
    }

    setOnCloseListener(listener: OnCloseListener) {
        this.closeListener = listener;
        console.log('listener', listener);
    }
}

export class PageComponet extends BaseComponent<HTMLUListElement> implements Composable {
    constructor() {
        super('<ul class="page"></ul>');
    }

    addChild(section: Componet) {
        const item = new PageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}