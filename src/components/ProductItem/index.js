import { faBagShopping, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import formatCurrency from '~/until/formatCurrency';
import '../ProductItem/ProductItem.css';

const ProductItem = () => {
    return (
        <div className="container">
            <div className="row row-cols-2 row-cols-lg-4 g-4 g-lg-4">
                <div className="card-product" style={{ width: '100%' }}>
                    <Link to="/">
                        <Card style={{ borderRadius: '0.5rem' }}>
                            <img
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                                style={{
                                    aspectRatio: '1 / 1',
                                    objectFit: 'cover',
                                    borderTopLeftRadius: '0.5rem',
                                    borderTopRightRadius: '0.5rem',
                                }}
                            />
                            <div className="card-new">NEW</div>
                            <div
                                className="btn-group me-2 position-absolute card-btn"
                                role="group"
                                aria-label="First group"
                                style={{ flexFlow: 'column', top: '1.4rem', right: '1rem' }}
                            >
                                <button type="button" className="btn btn-secondary rounded-circle card-btn-item">
                                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: '1.6rem', color: 'black' }} />
                                </button>
                                <button type="button" className="btn btn-secondary rounded-circle my-3  card-btn-item">
                                    <FontAwesomeIcon
                                        icon={faBagShopping}
                                        style={{ fontSize: '1.6rem', color: 'black' }}
                                    />
                                </button>
                                <button type="button" className="btn btn-secondary rounded-circle card-btn-item">
                                    <FontAwesomeIcon icon={faEye} style={{ fontSize: '1.6rem', color: 'black' }} />
                                </button>
                            </div>
                            <CardBody>
                                <CardTitle
                                    tag="h4"
                                    style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                >
                                    Vai chuyển hướng Vai chuyển hướngVai chuyển hướng
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted" tag="h5">
                                    Nhóm phụ tùng
                                </CardSubtitle>
                                <CardText tag="h3" style={{ color: '#ea1b25', fontSize: '1.8rem' }}>
                                    <span
                                        style={{
                                            textDecorationLine: 'line-through',
                                            fontSize: '1.4rem',
                                            color: 'gray',
                                        }}
                                    >
                                        {formatCurrency(50000)}
                                    </span>{' '}
                                    {formatCurrency(21000)}
                                </CardText>
                                <CardText tag="h5" className="text-end" style={{ color: 'gray' }}>
                                    Đã bán 3085
                                </CardText>
                            </CardBody>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
