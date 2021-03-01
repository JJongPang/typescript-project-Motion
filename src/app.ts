import { imageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
class App {
    private readonly page: PageComponent;
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new imageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforebegin');
    }
}

new App(document.querySelector('.document')! as HTMLElement);