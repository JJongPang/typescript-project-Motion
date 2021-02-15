import { PageComponet } from './component/page.js';
class App {
    private readonly page: PageComponet;

    constructor(appRoot: HTMLElement) {
        this.page = new PageComponet();
        this.page.attachTo(appRoot);
    }
}

new App(document.querySelector('.document') as HTMLElement);