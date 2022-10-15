import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
        src: '/slide1.jpg',
        altText: 'Sửa chữa tất cả các loại xe tải',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: '/slide2.jpg',
        altText: 'Xe KAMAZ chính hãng',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: '/slide3.png',
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
                <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
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
