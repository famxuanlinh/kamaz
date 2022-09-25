import { faBagShopping, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import formatCurrency from '~/until/formatCurrency';
import '../ProductItem/ProductItem.css';
import ProductQuickView from '../ProductQuickView';

import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import { BASE_URL } from '~/constants/env';
import ProductsDetail from '../ProductsDetail';

const ProductItem = ({ product, args }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div className="card-product " style={{ width: '100%' }}>
            <div>
                <Link to={`/san-pham/${product.attributes.slug}`}>
                    <Card style={{ borderRadius: '0.5rem' }} className="shadow-sm">
                        <img
                            alt="Sample"
                            src={`http://localhost:1337${product.attributes.images?.data[0].attributes.formats.small.url}`}
                            style={{
                                aspectRatio: '1 / 1',
                                objectFit: 'cover',
                                borderTopLeftRadius: '0.5rem',
                                borderTopRightRadius: '0.5rem',
                            }}
                        />
                        <div className="card-new">NEW</div>

                        <CardBody>
                            <CardTitle
                                tag="h4"
                                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                            >
                                {product.attributes.name}
                            </CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h5">
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
                            </CardSubtitle>
                            <CardText tag="h3" style={{ color: '#ea1b25', fontSize: '1.8rem' }}>
                                <span
                                    style={{
                                        textDecorationLine: 'line-through',
                                        fontSize: '1.4rem',
                                        color: 'gray',
                                    }}
                                >
                                    {formatCurrency(product.attributes.price)}
                                </span>{' '}
                                {formatCurrency(product.attributes.price)}
                            </CardText>
                            <CardText tag="h5" className="text-end" style={{ color: 'gray' }}>
                                Đã bán {product.attributes.sold != null ? product.attributes.sold : '3403'}
                            </CardText>
                        </CardBody>
                    </Card>
                </Link>
                <div
                    className="btn-group me-2 position-absolute card-btn"
                    role="group"
                    aria-label="First group"
                    style={{ flexFlow: 'column', top: '1.4rem', right: '1rem' }}
                >
                    <button
                        type="button"
                        className="btn btn-secondary rounded-circle cus-btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Thêm Vào Wishlist"
                    >
                        <FontAwesomeIcon
                            className="cus-btn-icon"
                            icon={faHeart}
                            style={{ fontSize: '1.6rem', color: 'black' }}
                        />
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary rounded-circle my-3  cus-btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Thêm Vào Giỏ Hàng"
                    >
                        <FontAwesomeIcon
                            className="cus-btn-icon"
                            icon={faBagShopping}
                            style={{ fontSize: '1.6rem', color: 'black' }}
                        />
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary rounded-circle cus-btn"
                        data-bs-toggle="modal"
                        data-bs-placement="left"
                        data-bs-target="#exampleModal"
                        title="Xem Nhanh"
                        onClick={toggle}
                    >
                        <FontAwesomeIcon
                            className="cus-btn-icon"
                            icon={faEye}
                            style={{ fontSize: '1.6rem', color: 'black' }}
                        />
                    </button>
                    {/* <!-- Modal --> */}
                    <Modal isOpen={modal} toggle={toggle} {...args} style={{ maxWidth: '950px' }}>
                        <ModalHeader toggle={toggle}></ModalHeader>
                        <ModalBody>
                            <ProductsDetail product={product} showMoreInfo={false} />
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
