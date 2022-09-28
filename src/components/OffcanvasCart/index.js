import { Button, Col, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '~/until/formatCurrency';
import { useCart } from '~/contexts/Cart/CartContext';

import ProductItemOffcanvas from '../ProductItemOffcanvas';

function OffcanvasCart() {
    const [isOpen, setIsOpen] = useState(false);
    const { products, handleUpdateCart, totalMoneyCart, totalQty } = useCart();

    return (
        <div className="mx-3 position-relative">
            <Button
                style={{ backgroundColor: 'transparent', border: 'none', position: 'relative' }}
                onClick={() => setIsOpen(true)}
            >
                <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '3rem', color: '#42454D' }} />
                <span
                    style={{ fontSize: '10px' }}
                    className="position-absolute top-1 start-90 translate-middle badge rounded-pill bg-danger"
                >
                    {totalQty}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </Button>
            <Offcanvas
                style={{ maxWidth: '400px', padding: '20px' }}
                isOpen={isOpen}
                toggle={() => setIsOpen((prev) => !prev)}
                direction={'end'}
            >
                <OffcanvasHeader toggle={() => setIsOpen((prev) => !prev)} style={{ paddingBottom: '0' }}>
                    <strong style={{ fontSize: '1.8rem' }}>Giỏ Hàng</strong>
                </OffcanvasHeader>
                <OffcanvasBody style={{ paddingTop: '0', marginBottom: '230px' }}>
                    <Row>
                        <Col>
                            {products.length > 0 ? (
                                products?.map((item) => (
                                    <div key={item.id}>
                                        <ProductItemOffcanvas product={item} />
                                    </div>
                                ))
                            ) : (
                                <div
                                    className="d-flex justify-content-center "
                                    style={{ fontSize: '20px', marginTop: '150px' }}
                                >
                                    Không Có Sản Phẩm Nào
                                </div>
                            )}
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div
                    className="position-absolute"
                    style={{
                        // padding: '6px 0',
                        width: '90%',
                        marginBottom: '20px',
                        bottom: '0',
                        right: '20px',
                    }}
                >
                    {/* <hr style={{ width: '100%', margin: '20px 0' }} /> */}
                    <div>
                        <div className="total-price d-flex justify-content-between">
                            <h3>Thành Tiền:</h3>
                            <h3>{formatCurrency(totalMoneyCart)}</h3>
                        </div>
                        <div className="total-price d-flex justify-content-between">
                            <h3>Tiết kiệm:</h3>
                            <h3>{formatCurrency(0)}</h3>
                        </div>
                        <div className="total-price d-flex justify-content-between">
                            <h3>Tổng thanh toán:</h3>
                            <h3>
                                <strong>{formatCurrency(totalMoneyCart)}</strong>
                            </h3>
                        </div>
                    </div>
                    <Link to="/gio-hang">
                        <Button size="lg" color="light" style={{ fontSize: '2rem', width: '100%', margin: '20px 0' }}>
                            Xem Giỏ Hàng
                        </Button>
                    </Link>
                    <Link to="/don-hang/dong-co">
                        <Button
                            size="lg"
                            color="primary"
                            href="#"
                            tag="a"
                            style={{ fontSize: '2rem', width: '100%', marginBottom: '20px' }}
                        >
                            Thanh toán ngay
                        </Button>
                    </Link>
                    <div style={{ fontSize: '12px' }}>Lưu ý: Số tiền trên chưa bao gồm phí ship.</div>
                </div>
            </Offcanvas>
        </div>
    );
}

export default OffcanvasCart;
