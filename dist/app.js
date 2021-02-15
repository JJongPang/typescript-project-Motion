import { ImageComponent } from './component/page/item/image.js';
import { PageComponet } from './component/page/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponet();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
