import { Component } from './components/component.js';
import { InputDialog, Mediadata, Textdata } from './components/dialog/dialog.js';
import { MediaSectionInput } from './components/dialog/input/media-input.js';
import { TextSectionInput } from './components/dialog/input/text-input.js';
import { ImageComponent } from './components/page/item/image.js';
import { NoteComponent } from './components/page/item/note.js';
import { TodoComponent } from './components/page/item/todo.js';
import { VideoComponent } from './components/page/item/video.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';

type InputComponentConstructor<T = (Mediadata | Textdata) & Component> = {
    new () : T;
}

class App {
    // private readonly page: PageComponent;
    private readonly page: Component & Composable;
    constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        this.bindElementToDialog<MediaSectionInput>('#new-image', MediaSectionInput, (input: MediaSectionInput) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog<MediaSectionInput>('#new-video', MediaSectionInput, (input: MediaSectionInput) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog<TextSectionInput>('#new-note', TextSectionInput, (input: TextSectionInput) => new NoteComponent(input.title, input.body));
        this.bindElementToDialog<TextSectionInput>('#new-todo', TextSectionInput, (input: TextSectionInput) => new TodoComponent(input.title, input.body));
        //     const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    //     this.page.addChild(image);
        
    //     const note = new NoteComponent('Note Title', 'Note Body');
    //     this.page.addChild(note);

    //     const todo = new TodoComponent('Todo Title', 'Todo Item');
    //     this.page.addChild(todo);

    //    const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/tetFlvjO2G0');
    //     this.page.addChild(video);

        // const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
        // imageBtn.addEventListener('click', () => {
        //     const dialog = new InputDialog();
        //     const inputSection = new MediaSectionInput();
        //     dialog.addChild(inputSection);
        //     dialog.attachTo(dialogRoot);

        //     dialog.setOncloseListener(() => {
        //         dialog.removeFrom(dialogRoot);
        //     });

        //     dialog.setOnsubmitListener(() => {
        //         // 섹션을 만들어서 페이지에 추가 해준다
        //         const image = new ImageComponent(inputSection.title, inputSection.url);
        //         this.page.addChild(image);
        //         dialog.removeFrom(dialogRoot);
        //     });
            
        // });

        // const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
        // videoBtn.addEventListener('click', () => {
        //     const dialog = new InputDialog();
        //     const inputSection = new MediaSectionInput();
        //     dialog.addChild(inputSection);
        //     dialog.attachTo(dialogRoot);
        //     dialog.setOncloseListener(() => {
        //         dialog.removeFrom(dialogRoot);
        //     });

        //     dialog.setOnsubmitListener(() => {
        //         const video = new VideoComponent(inputSection.title, inputSection.url);
        //         this.page.addChild(video);
        //         dialog.removeFrom(dialogRoot);
        //     });
        // });

        // const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
        // noteBtn.addEventListener('click', () => {
        //     const dialog = new InputDialog();
        //     const inputSection = new TextSectionInput();
        //     dialog.addChild(inputSection);
        //     dialog.attachTo(dialogRoot);
        //     dialog.setOncloseListener(() => {
        //         dialog.removeFrom(dialogRoot);
        //     });

        //     dialog.setOnsubmitListener(() => {
        //         const note = new NoteComponent(inputSection.title, inputSection.body);
        //         this.page.addChild(note);
        //         dialog.removeFrom(dialogRoot);
        //     });
        // });

        // const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
        // todoBtn.addEventListener('click', () => {
        //     const dialog = new InputDialog();
        //     const inputSection = new TextSectionInput();
        //     dialog.addChild(inputSection);
        //     dialog.attachTo(dialogRoot);
        //     dialog.setOncloseListener(() => {
        //         dialog.removeFrom(this.dialogRoot);
        //     });

        //     dialog.setOnsubmitListener(() => {
        //         const todo = new TodoComponent(inputSection.title, inputSection.body);
        //         this.page.addChild(todo);
        //         dialog.removeFrom(this.dialogRoot);
        //     });
        // });
    }

    private bindElementToDialog<T extends (Mediadata | Textdata) & Component>(selector: string, InputComponent: InputComponentConstructor<T>, makeSection: (input: T) => Component) {
        const element = document.querySelector(selector)! as HTMLButtonElement;
        element.addEventListener('click', () => {
            const dialog = new InputDialog();
            const input = new InputComponent();
            dialog.addChild(input);
            dialog.attachTo(this.dialogRoot);

            dialog.setOncloseListener(() => {
                dialog.removeFrom(this.dialogRoot);
            });

            dialog.setOnsubmitListener(() => {
                // 섹션을 만들어서 페이지에 추가 해준다
                const image = makeSection(input);
                this.page.addChild(image);
                dialog.removeFrom(this.dialogRoot);
            });
            
        });
    }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);