import { BaseComponent } from './../../components';

class VideoComponent extends BaseComponent<HTMLVideoElement> {
    constructor(title: string, url: string) {
        super(
            `<section class="video">
                <div class="vdieo__holder">
                    <img class="image__thumbnail" />
                </div>
            <p class="image__title"></p>
            </section>
            `
        );

        const videoElement = 
    }
}