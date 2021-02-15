import { BaseComponent } from "../components.js";

export class PageComponet extends BaseComponent<HTMLUListElement> {
    constructor() {
        super('<ul class="page">This is PageComponent!</ul>');
    }
}