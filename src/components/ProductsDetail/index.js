import { faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import formatCurrency from '~/until/formatCurrency';
import './ProductsDetail.css';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '~/contexts/Cart/CartContext';
import QuantityInput from '../QuantityInput';
import { BASE_URL, IMG_URL } from '~/constants/env';

function ProductsDetail({ product, showMoreInfo }) {
    const { handleAddToCart, handleQuickCheckout } = useCart();
    const [qty, setQty] = useState(1);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <div style={{ backgroundColor: 'white' }}>
                <div className="row ">
                    <div className="col-lg">
                        <div className="m-4">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner mb-4 position-relative">
                                    {product.attributes.images.data.map((img) => (
                                        <div className="carousel-item active " key={img.id}>
                                            <img
                                                src={IMG_URL + img.attributes.formats.medium.url}
                                                className="d-block w-100"
                                                alt="..."
                                                style={{
                                                    aspectRatio: '1 / 1',
                                                    objectFit: 'cover',
                                                    borderRadius: '0.5rem',
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center ">
                                    <div style={{ bottom: '1rem' }}>
                                        <div className="d-flex justify-content-center align-items-center">
                                            {product.attributes.images.data.map((img, index) => (
                                                <img
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to={index}
                                                    className="active img-thumbnail mx-3"
                                                    aria-current="true"
                                                    src={IMG_URL + img.attributes.formats.thumbnail.url}
                                                    alt=""
                                                    key={img.id}
                                                    style={{
                                                        aspectRatio: '1 / 1',
                                                        objectFit: 'cover',
                                                        maxWidth: '6rem',
                                                        borderRadius: '0.5rem',
                                                        border: '1px solid #ddd',
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg ">
                        <div className="mx-4 mb-4">
                            <div
                                style={{
                                    fontSize: '30px',
                                    marginTop: '20px',
                                    fontWeight: '600',
                                    textTransform: 'none',
                                }}
                            >
                                {product.attributes.name}
                            </div>
                            <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                                {' '}
                                Nhóm:
                                {product.attributes.categories?.data.map((item) => {
                                    if (item.attributes.is_menu === true) {
                                        return (
                                            <span key={item.id}>
                                                <span className="px-3" style={{ color: '#1f3f81' }}>
                                                    {item.attributes.group_number}
                                                </span>
                                                {item.attributes.name}
                                            </span>
                                        );
                                    } else {
                                        return <span key={item.id}></span>;
                                    }
                                })}
                            </h2>
                            <div>
                                <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                <FontAwesomeIcon icon={faStarHalf} className="text-secondary" />
                                <span style={{ margin: '15px' }}>|</span>
                                <span
                                    style={{
                                        fontWeight: '600',
                                        marginRight: '10px',
                                        textDecorationLine: 'underline',
                                    }}
                                >
                                    {product.attributes.sold != null ? product.attributes.sold : '3244'}
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
                            {showMoreInfo === true ? (
                                <div>
                                    <div>Lưu ý: </div>
                                    <div>
                                        - Để biết rõ hơn về cách thức đặt hàng và giao hang hãy liên hệ ngay với chúng
                                        tôi{' '}
                                    </div>
                                    <div>
                                        - Giá trên có thể thay đổi do tình hình chiến tranh đang kéo dài ở nga và
                                        ukraina .{' '}
                                    </div>
                                    <div>- Chúng tôi đã, đang và chỉ bán phụ tùng chính hãng từ nhà máy, Nga.</div>
                                    <hr />
                                </div>
                            ) : (
                                ''
                            )}
                            <ul className="py-3 ">
                                <li style={{ listStyle: 'circle' }}>
                                    Mã phụ tùng:
                                    <span className="text-success ps-3">{product.attributes.sku}</span>
                                </li>
                                <li style={{ listStyle: 'circle' }}>
                                    Thương Hiệu:
                                    <span className="text-success ps-3">{product.attributes.brand}</span>
                                </li>
                                <li style={{ listStyle: 'circle' }}>
                                    Sản Xuất tại:
                                    <span className="text-success ps-3">{product.attributes.madeIn}</span>
                                </li>
                                <li style={{ listStyle: 'circle' }}>
                                    Tình Trạng Kho:<span className="text-success ps-3">Còn Hàng</span>
                                </li>
                            </ul>
                            <hr />

                            <div className="d-flex mt-4 mb-3 align-items-center">
                                <div className="pe-4"> Số Lượng: </div>
                                <div style={{ borderRadius: '5px', border: '1px solid gray' }}>
                                    <QuantityInput onChange={(newQty) => setQty(newQty)} />
                                </div>
                            </div>
                            <div className="text-center  d-md-flex mb-3">
                                <div className="me-md-3 mb-3">
                                    <button
                                        className="btn  pe-2 px-md-5  w-100  "
                                        style={{
                                            fontSize: '2rem',
                                            border: '1px solid #1f3f81',
                                            color: '#1f3f81',
                                        }}
                                        onClick={() => handleAddToCart(product, qty)}
                                    >
                                        {/* {console.log(qty)} */}
                                        Thêm Vào Giỏ Hàng
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className="btn btn-primary py-2 px-md-5 w-100"
                                        style={{ fontSize: '2rem' }}
                                        onClick={() => handleQuickCheckout(product, qty)}
                                    >
                                        Mua Ngay
                                    </button>
                                </div>
                            </div>
                            <div className="d-md-flex pb-4">
                                <button
                                    style={{ background: 'none', border: 'none' }}
                                    className="pb-md-2  pe-5"
                                    // onClick={() => handleAddToWishlist(...product, qty)}
                                >
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
                                    <a href="https://zalo.me/0964347450" className="text-danger">
                                        Liên Hệ Với Chúng Tôi!
                                    </a>
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
                                Từ Khoá: <span style={{ fontWeight: '500' }}>{product.attributes.tag}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductsDetail;
