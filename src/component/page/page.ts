import { Componet } from './../components';
import { BaseComponent } from "../components.js";

export interface Composable {
   addChild(child: Componet): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Componet, Composable {
    setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
    new (): SectionContainer;
}

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
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
    constructor(private pageItemConstructor: SectionContainerConstructor) {
        super('<ul class="page"></ul>');
    }

    addChild(section: Componet) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setOnCloseListener(() => {
            item.removeFrom(this.element);
        });
    }
}