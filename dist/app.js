import { VideoComponent } from './component/page/item/video.js';
import { NoteComponent } from './component/page/item/note.js';
import { ImageComponent } from './component/page/item/image.js';
import { PageComponet } from './component/page/page.js';
import { TodoComponent } from './component/page/item/todo.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponet();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        this.page.addChild(image);
        const video = new VideoComponent('Video Title', "https://www.youtube.com/watch?v=T2MkuMdzAuw");
        this.page.addChild(video);
        const note = new NoteComponent('Note Title', 'Note Body');
        this.page.addChild(note);
        const todo = new TodoComponent('Todo Title', 'Todo Item');
        this.page.addChild(todo);
    }
}
new App(document.querySelector('.document'));
