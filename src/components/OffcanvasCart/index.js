import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    CloseButton,
    Col,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Row,
} from 'reactstrap';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '~/until/formatCurrency';

function OffcanvasCart() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mx-3">
            <Button
                style={{ backgroundColor: 'transparent', border: 'none', position: 'relative' }}
                onClick={() => setIsOpen(true)}
            >
                <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '3rem', color: 'black' }} />
                <span
                    style={{ fontSize: '10px' }}
                    className="position-absolute top-1 start-90 translate-middle badge rounded-pill bg-danger"
                >
                    99<span className="visually-hidden">unread messages</span>
                </span>
            </Button>
            <Offcanvas
                style={{ maxWidth: '400px' }}
                isOpen={isOpen}
                toggle={() => setIsOpen((prev) => !prev)}
                direction={'end'}
            >
                <OffcanvasHeader toggle={() => setIsOpen((prev) => !prev)} style={{ paddingBottom: '0' }}>
                    <strong>Giỏ Hàng</strong>
                </OffcanvasHeader>
                <OffcanvasBody style={{ paddingTop: '0' }}>
                    <Row>
                        <Col>
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
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: '1.4rem',
                                                            color: 'gray',
                                                        }}
                                                    >
                                                        1x
                                                    </span>{' '}
                                                    {formatCurrency(21000)}
                                                </>
                                            </CardText>

                                            <CloseButton
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
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: '1.4rem',
                                                            color: 'gray',
                                                        }}
                                                    >
                                                        1x
                                                    </span>{' '}
                                                    {formatCurrency(21000)}
                                                </>
                                            </CardText>

                                            <CloseButton
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
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: '1.4rem',
                                                            color: 'gray',
                                                        }}
                                                    >
                                                        1x
                                                    </span>{' '}
                                                    {formatCurrency(21000)}
                                                </>
                                            </CardText>

                                            <CloseButton
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
                        </Col>
                    </Row>
                    <hr style={{ width: '100%', margin: '20px 0' }} />
                    <div>
                        <div className="total-price d-flex justify-content-between">
                            <h3>Tiết kiệm:</h3>
                            <h3>{formatCurrency(21000)}</h3>
                        </div>
                        <div className="total-price d-flex justify-content-between">
                            <h3>Tổng thanh toán:</h3>
                            <h3>
                                <strong>{formatCurrency(21000)}</strong>
                            </h3>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        color="secondary"
                        href="#"
                        tag="a"
                        style={{ fontSize: '1.6rem', width: '100%', margin: '30px 0' }}
                    >
                        Xem Giỏ Hàng
                    </Button>
                    <Button
                        size="lg"
                        color="primary"
                        href="#"
                        tag="a"
                        style={{ fontSize: '1.6rem', width: '100%', marginBottom: '20px' }}
                    >
                        Thanh toán ngay
                    </Button>
                    <p color="secondary" style={{ fontSize: '12px' }}>
                        Lưu ý: Số tiền trên chưa bao gồm phí ship.
                    </p>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
}

export default OffcanvasCart;
