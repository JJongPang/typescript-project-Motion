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
        iframe.src = this.convertToEmbeddedURL(url);
        
        const videoTitle = this.element.querySelector('.video__title')! as HTMLHeadElement;
        videoTitle.textContent = title;
    }
    // input
    // https://www.youtube.com/embed/fBw5iwzu7hI
    // https://youtu.be/K3-jG52XwuQ
    // output
    // 정규표현식 Regex
    private convertToEmbeddedURL(url: string): string {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);

        const videoId = match ? match[1] || match[2] : undefined;
        
        if(videoId) {
            return `https://youtu.be/${videoId}`;
        }
        return url;
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