import { useState, useEffect } from 'react';

import Button from '../Button/Button';
import { BsArrowBarRight, BsArrowBarLeft } from 'react-icons/bs';

import './_imgCarousel.scss';

export default function ImgCarousel({ images }, isOpen) {
    const [activeImage, setActiveImage] = useState(0);

    const nextImage = () => {
        setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
    };

    const previousImage = () => {
        setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
    };

    // Auto roll of images every 3 sec
    useEffect(() => {
        if (isOpen) {
            const timer = setInterval(() => {
                setActiveImage(
                    activeImage === images.length - 1 ? 0 : activeImage + 1,
                );
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [isOpen, activeImage, images.length]);

    return (
        <div className="carousel-container">
            {images.length > 1 ? (
                <Button variant="carousel__prev" onClick={previousImage}>
                    <BsArrowBarLeft />
                </Button>
            ) : null}
            <div className="carousel-images">
                {images.map((image, index) => (
                    <div
                        className={`${activeImage === index ? 'carousel-image' : 'carousel-image__hidden'}`}
                        key={`Image ${index}`}
                    >
                        <img
                            key={index}
                            alt={image.alt}
                            src={image.url}
                            loading="lazy"
                        />
                        {images.length > 1 ? (
                            <span className="carousel-image__counter">
                                {index + 1}/{images.length}
                            </span>
                        ) : null}
                    </div>
                ))}
            </div>
            {images.length > 1 ? (
                <Button variant="carousel__next" onClick={nextImage}>
                    <BsArrowBarRight />
                </Button>
            ) : null}
        </div>
    );
}
