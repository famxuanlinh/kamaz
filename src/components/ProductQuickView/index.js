import { faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import formatCurrency from '~/until/formatCurrency';
import './ProductImage.css';
import { Link } from 'react-router-dom';
import QuantityInput from '../QuantityInput';

// const items = [
//     {
//         src: 'https://www.autoopt.ru/product_pictures/big/f76/671270_3.jpg',
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         key: 1,
//     },
//     {
//         src: 'https://www.autoopt.ru/product_pictures/big/640/671270.jpg',
//         altText: 'Slide 2',
//         caption: 'Slide 2',
//         key: 2,
//     },
//     {
//         src: 'https://picsum.photos/id/678/1200/400',
//         altText: 'Slide 3',
//         caption: 'Slide 3',
//         key: 3,
//     },
// ];

function ProductQuickView({ product }) {
    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className="row ">
                <div className="col-lg">
                    <div className="m-4">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner mb-4 position-relative">
                                <div className="carousel-item active">
                                    <img
                                        src="https://www.autoopt.ru/product_pictures/big/f76/671270_3.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                        style={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '0.5rem' }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://www.autoopt.ru/product_pictures/big/640/671270.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                        style={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '0.5rem' }}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://www.autoopt.ru/product_pictures/big/31f/671270_2.jpg"
                                        className="d-block w-100"
                                        alt="..."
                                        style={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '0.5rem' }}
                                    />
                                </div>
                            </div>
                            <div className="text-center ">
                                <div style={{ bottom: '1rem' }}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0"
                                            className="active img-thumbnail mx-3"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                            src="https://www.autoopt.ru/product_pictures/big/f76/671270_3.jpg"
                                            alt=""
                                            style={{
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                                maxWidth: '6rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #ddd',
                                            }}
                                        />
                                        <img
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                            className="img-thumbnail mx-3"
                                            src="https://www.autoopt.ru/product_pictures/big/640/671270.jpg"
                                            alt=""
                                            style={{
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                                maxWidth: '6rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #ddd',
                                            }}
                                        />
                                        <img
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                            className="img-thumbnail mx-3"
                                            src="https://www.autoopt.ru/product_pictures/big/31f/671270_2.jpg"
                                            alt=""
                                            style={{
                                                aspectRatio: '1 / 1',
                                                objectFit: 'cover',
                                                maxWidth: '6rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #ddd',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg ">
                    <div className="mx-4 mb-4">
                        <h2 style={{ fontSize: '30px', marginTop: '20px', fontWeight: '600' }}>
                            {product.attributes.name}
                        </h2>
                        <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>Nhóm động cơ</h2>
                        <div>
                            <FontAwesomeIcon icon={faStar} className="text-secondary" />
                            <FontAwesomeIcon icon={faStar} className="text-secondary" />
                            <FontAwesomeIcon icon={faStar} className="text-secondary" />
                            <FontAwesomeIcon icon={faStar} className="text-secondary" />
                            <FontAwesomeIcon icon={faStarHalf} className="text-secondary" />
                            <span style={{ margin: '15px' }}>|</span>
                            <span style={{ fontWeight: '600', marginRight: '10px', textDecorationLine: 'underline' }}>
                                {product.attributes.sold}
                            </span>
                            <span>Đã bán</span>
                        </div>
                        <div className="text-danger py-4">
                            <strong style={{ fontSize: '30px' }}>{formatCurrency(product.attributes.price)}</strong>
                            <span
                                style={{
                                    textDecorationLine: 'line-through',
                                    fontSize: '1.4rem',
                                    color: 'gray',
                                    paddingLeft: '20px',
                                }}
                            >
                                {formatCurrency(product.attributes.price)}
                            </span>{' '}
                        </div>
                        <hr />
                        <div className="d-flex mt-4 mb-3 align-items-center">
                            <div className="pe-4"> Số Lượng: </div>
                            <div
                                style={{ borderRadius: '5px', border: '1px solid gray' }}
                                // className=" px-3 "
                            >
                                <QuantityInput />
                            </div>
                        </div>
                        <div className="text-center   mb-3">
                            <div className=" mb-3">
                                <button
                                    className="btn  pe-2 px-md-5  w-100  "
                                    style={{ fontSize: '2rem', border: '1px solid #1f3f81', color: '#1f3f81' }}
                                >
                                    Thêm Vào Giỏ Hàng
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-primary py-2 px-md-5 w-100" style={{ fontSize: '2rem' }}>
                                    Mua Ngay
                                </button>
                            </div>
                        </div>
                        <div className="d-flex pb-4">
                            <button style={{ background: 'none', border: 'none' }} className="pb-md-2  pe-5">
                                <span>
                                    <FontAwesomeIcon
                                        icon={faHeart}
                                        className="text-secondary"
                                        style={{ paddingRight: '6px' }}
                                    />{' '}
                                    Thêm Vào Wishlist
                                </span>
                            </button>
                            <button style={{ background: 'none', border: 'none' }}>
                                <span className="text-danger">Liên Hệ Với Chúng Tôi!</span>
                            </button>
                        </div>
                        <div className="d-flex">
                            {' '}
                            Chia Sẻ:{' '}
                            <ul className="d-flex">
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faFacebook} />{' '}
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faTwitter} />{' '}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FontAwesomeIcon icon={faWhatsapp} />{' '}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div style={{ fontWeight: '600' }}>
                            Từ Khoá: <span style={{ fontWeight: '500' }}>Động cơ, hộp số, tuyển chọn</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductQuickView;
