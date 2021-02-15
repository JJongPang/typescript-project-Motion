import { BaseComponent } from './../../components.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(
            `
            <section class="video">
                <div class="video__player">
                    <iframe class="video__iframe"></iframe>
                </div>
                <h3 class="video__title"></h3>
            </section>
            `
        );

        const iframe = this.element.querySelector('.video__iframe')! as HTMLVideoElement;
        url = "https://www.youtube.com/embed/fBw5iwzu7hI"
        iframe.src = url;

        const videoTitle = this.element.querySelector('.video__title')! as HTMLHeadElement;
        videoTitle.textContent = title;
    }
}

// <iframe
//             width="1237"
//             height="696"
//             src="https://www.youtube.com/embed/fBw5iwzu7hI"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
// ></iframe>