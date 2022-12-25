import React, {useEffect, useRef, useState} from 'react';
import placeholder from "../images/placeholder.png";
import {defaultLazyImageLoader} from "./LazyImageLoader";

import "./Image.scss";

export function Image({image, alt}) {
    let [src, setImg] = useState(placeholder);

    let element = useRef(null);
    useEffect(() => {
        let currentElement = element.current;
        let display = () => setImg(image);
        defaultLazyImageLoader.register(currentElement, display);
        currentElement.addEventListener("display", display, {passive: true});
        return () => {
            currentElement.removeEventListener("display", display);
        };
    }, [image]);

    return (
        <img ref={element} src={src} className="photo" alt={alt || ""} />
    );
}
