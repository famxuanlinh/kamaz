import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
        src: 'https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg',
        altText: 'Phụ Tùng Chính Hãng',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://r4.wallpaperflare.com/wallpaper/28/775/705/sunset-the-evening-auto-machine-truck-hd-wallpaper-4b4813be23a33f8f347cc5adcbab1b35.jpg',
        altText: 'Kamaz',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://r4.wallpaperflare.com/wallpaper/725/828/848/engine-spare-parts-the-piston-rod-wallpaper-590068bdc10aad8bc607e80f0091260d.jpg',
        altText: 'Phụ Tùng Chính Hãng',
        caption: 'Slide 3',
        key: 3,
    },
];

function CarouselSlide(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
                style={{ width: '100vw' }}
            >
                <img
                    src={item.src}
                    alt={item.altText}
                    style={{ width: '100vw', minHeight: '30rem', maxHeight: '52.5rem', objectFit: 'cover' }}
                />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default CarouselSlide;
