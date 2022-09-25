import React from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, CloseButton, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import formatCurrency from '~/until/formatCurrency';
import QuantityInput from '../QuantityInput';
import { useCart } from '~/contexts/Cart/CartContext';

const ProductItemOffcanvas = (product) => {
    const { handleUpdateCart, handleDeleteItemInCart } = useCart();

    return (
        <div>
            <hr style={{ width: '100%', margin: '20px 0' }} />
            <Card style={{ border: 'none' }}>
                <Row className="no-gutters">
                    <Col md="4">
                        <CardImg
                            top
                            width="100%"
                            src="https://picsum.photos/300/200"
                            alt="Card image cap"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col md="8">
                        <CardBody>
                            <CardTitle>{product.product.attributes.name}</CardTitle>
                            <CardSubtitle className="pb-2" style={{ fontSize: '1.4rem' }}>
                                Sku: {product.product.attributes.sku}
                            </CardSubtitle>
                            <CardText tag="h3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div style={{ borderRadius: '5px', border: '1px solid gray', fontSize: '14px' }}>
                                        <QuantityInput
                                            onChange={(newQty) => handleUpdateCart(product.product.id, newQty)}
                                            defaultQty={product.product.qty}
                                        />
                                    </div>

                                    <div>
                                        <span style={{ color: '#ea1b25' }}>
                                            {formatCurrency(product.product.attributes.price)}
                                        </span>
                                    </div>
                                </div>
                            </CardText>

                            <CloseButton
                                onClick={() => handleDeleteItemInCart(product.product.id)}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '0',
                                    fontSize: '1rem',
                                }}
                            />
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ProductItemOffcanvas;
