import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductItem from '../ProductItem';
import '../NewProducts/NewProducts.css';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewProducts = () => {
    const fakeProducts = new Array(10).fill(1213123);

    return (
        <div className="container">
            <h2 className="title-products-home">
                <FontAwesomeIcon icon={faMinus} style={{ color: '#1f3f81', paddingRight: '0.5rem' }} /> SẢN PHẨM{' '}
                <span style={{ fontWeight: '600' }}>MỚI</span>
            </h2>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 4,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 768,
                            min: 0,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 768,
                        },
                        items: 3,
                        partialVisibilityGutter: 30,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {fakeProducts.map((_item, index) => (
                    <div
                        style={{
                            margin: '8px',
                        }}
                        key={index}
                    >
                        <ProductItem key={index} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default NewProducts;
