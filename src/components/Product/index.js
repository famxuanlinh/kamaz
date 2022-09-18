import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const items = [
    {
        src: 'https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: 'https://picsum.photos/id/456/1200/400',
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: 'https://picsum.photos/id/678/1200/400',
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

function Product() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className="row g-4">
                <div className="col-lg">
                    <div className="m-4">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner mb-4 position-relative">
                                <div className="carousel-item active">
                                    <img
                                        src="https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                        style={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '0.5rem' }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                        style={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '0.5rem' }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                        style={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '0.5rem' }}
                                    />
                                </div>
                            </div>
                            <div className="text-center ">
                                <div className="position-absolute" style={{ bottom: '1rem' }}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0"
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                            src="https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg"
                                            alt=""
                                            style={{
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                                maxWidth: '6rem',
                                                borderRadius: '0.5rem',
                                            }}
                                        />
                                        <img
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                            src="https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg"
                                            alt=""
                                            style={{
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                                maxWidth: '6rem',
                                                borderRadius: '0.5rem',
                                            }}
                                        />
                                        <img
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                            src="https://kamaztrade.com/sites/default/files/14._sklad_palletnogo_hraneniya_zch.jpg"
                                            alt=""
                                            style={{
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                                maxWidth: '6rem',
                                                borderRadius: '0.5rem',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg"></div>
            </div>
        </div>
    );
}

export default Product;
