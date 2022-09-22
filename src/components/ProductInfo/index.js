import { faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import formatCurrency from '~/until/formatCurrency';
import './ProductInfo.css';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '~/contexts/Cart/CartContext';
import QuantityInput from '../QuantityInput';
import { Table } from 'reactstrap';
import { BASE_URL } from '~/constants/env';

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

function ProductInfo() {
    const { handleAddToCart } = useCart();

    const [product, setProduct] = useState([]);
    const [qty, setQty] = useState(1);
    const { slug } = useParams();

    const getProduct = (slug) => {
        fetch(`${BASE_URL}/products?filters[slug]=${slug}&populate=*`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res.data);
            });
    };

    useEffect(() => {
        getProduct(slug);
    }, []);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            {product.map((item) => (
                <div key={item.id}>
                    <div style={{ backgroundColor: 'white' }}>
                        <div className="row ">
                            <div className="col-lg">
                                <div className="m-4">
                                    <div
                                        id="carouselExampleIndicators"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner mb-4 position-relative">
                                            <div className="carousel-item active">
                                                <img
                                                    src="https://www.autoopt.ru/product_pictures/big/f76/671270_3.jpg"
                                                    className="d-block w-100"
                                                    alt="..."
                                                    style={{
                                                        aspectRatio: '1 / 1',
                                                        objectFit: 'cover',
                                                        borderRadius: '0.5rem',
                                                    }}
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <img
                                                    src="https://www.autoopt.ru/product_pictures/big/640/671270.jpg"
                                                    className="d-block w-100"
                                                    alt="..."
                                                    style={{
                                                        aspectRatio: '1 / 1',
                                                        objectFit: 'cover',
                                                        borderRadius: '0.5rem',
                                                    }}
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <img
                                                    src="https://www.autoopt.ru/product_pictures/big/31f/671270_2.jpg"
                                                    className="d-block w-100"
                                                    alt="..."
                                                    style={{
                                                        aspectRatio: '1 / 1',
                                                        objectFit: 'cover',
                                                        borderRadius: '0.5rem',
                                                    }}
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
                                        {item.attributes.name}
                                    </h2>
                                    <h2 style={{ fontSize: '18px', marginBottom: '20px' }}>
                                        {' '}
                                        Nhóm:
                                        <span className="px-3" style={{ color: '#1f3f81' }}>
                                            {item.attributes.categories?.data[0].attributes.group_number}
                                        </span>
                                        {item.attributes.categories?.data[0].attributes.name}{' '}
                                        <strong className="px-3">|</strong>
                                        <span className="pe-3" style={{ color: '#1f3f81' }}>
                                            {item.attributes.categories?.data[1].attributes.group_number != null
                                                ? item.attributes.categories?.data[1].attributes.group_number
                                                : ''}
                                        </span>
                                        {item.attributes.categories?.data[1].attributes.name != null
                                            ? item.attributes.categories?.data[1].attributes.name
                                            : ''}
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
                                            {item.attributes.sold != null ? item.attributes.sold : '3244'}
                                        </span>
                                        <span>Đã bán</span>
                                    </div>
                                    <div className="text-danger py-4">
                                        <strong style={{ fontSize: '30px' }}>
                                            {formatCurrency(item.attributes.price)}
                                        </strong>
                                        <span
                                            style={{
                                                textDecorationLine: 'line-through',
                                                fontSize: '1.4rem',
                                                color: 'gray',
                                                paddingLeft: '20px',
                                            }}
                                        >
                                            {formatCurrency(item.attributes.price)}
                                        </span>{' '}
                                    </div>
                                    <hr />
                                    <div>Lưu Ý: </div>
                                    <div>
                                        Để Biết Rõ Hơn Về Cách Thức Đặt Hàng Và Giao Hang Hãy Liên Hệ Ngay với Chúng Tôi{' '}
                                    </div>
                                    <div>
                                        Giá Trên Có Thể Thay Đổi Tuỳ Do Tình Hình Chiến Tranh Đang kéo Dài Ở Nga Và
                                        Ukraina.{' '}
                                    </div>
                                    <div>Chúng Tôi Đã, Đang Và Chỉ Bán Phụ Tùng Chính Hãng Từ Nhà Máy, Nga.</div>
                                    <hr />
                                    <ul className="py-3 ">
                                        <li style={{ listStyle: 'circle' }}>
                                            Mã phụ tùng:<span className="text-success ps-3">{item.attributes.sku}</span>
                                        </li>
                                        <li style={{ listStyle: 'circle' }}>
                                            Thương Hiệu:
                                            <span className="text-success ps-3">{item.attributes.brand}</span>
                                        </li>
                                        <li style={{ listStyle: 'circle' }}>
                                            Sản Xuất tại:
                                            <span className="text-success ps-3">{item.attributes.madeIn}</span>
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
                                                onClick={() => handleAddToCart(...product, qty)}
                                            >
                                                Thêm Vào Giỏ Hàng
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary py-2 px-md-5 w-100"
                                                style={{ fontSize: '2rem' }}
                                            >
                                                Mua Ngay
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-md-flex pb-4">
                                        <button
                                            style={{ background: 'none', border: 'none' }}
                                            className="pb-md-2  pe-5"
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
                                        Từ Khoá: <span style={{ fontWeight: '500' }}>{item.attributes.tag}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', marginTop: '30px' }}>
                        <div className="p-5 ">
                            <h2 style={{ fontSize: '3rem' }}>Chi Tiết Sản Phẩm:</h2>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="col-2">
                                            Cân Nặng, g
                                        </th>
                                        <td className="col-10">
                                            {item.attributes.weight != null ? item.attributes.weight : '-'}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Chiều dài, cm </th>
                                        <td>{item.attributes.length != null ? item.attributes.length : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Chiều Rộng, cm</th>
                                        <td>{item.attributes.width != null ? item.attributes.width : '-'}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Chiều Cao, cm</th>
                                        <td>{item.attributes.height != null ? item.attributes.height : '-'}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="px-5 pb-5">
                            <h2 style={{ fontSize: '3rem' }}>Mô Tả Sản Phẩm:</h2>
                            <div>
                                <div>{item.attributes.description}</div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
                                scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                                urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProductInfo;
