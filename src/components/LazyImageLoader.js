export class LazyImageLoader {
    constructor() {
        this.observed = {};

        if (!window.IntersectionObserver) {
            this.observer = null;
        } else {
            this.observer = new IntersectionObserver((items, observer) => {
                items.forEach(item => {
                    if (item.isIntersecting) {
                        if (typeof item.target.callback === "function") {
                            item.target.callback();
                        }
                        observer.unobserve(item.target);
                    }
                });
            });
        }
    }

    register(img, callback) {
        if (!this.observer) {
            callback();
            return;
        }
        this.observer.observe(img);
        img.callback = callback;
    }
}

export const defaultLazyImageLoader = new LazyImageLoader();
