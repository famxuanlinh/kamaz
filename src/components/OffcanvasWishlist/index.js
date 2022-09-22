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
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from '~/until/formatCurrency';

function OffcanvasWishlist() {
    const [isOpen, setIsOpen] = useState(false);

    const fakeProducts = new Array(8).fill(1);

    return (
        <div className="position-relative">
            <Button
                style={{ backgroundColor: 'transparent', border: 'none', position: 'relative' }}
                onClick={() => setIsOpen(true)}
            >
                <FontAwesomeIcon icon={faHeart} style={{ fontSize: '3rem', color: '#42454D' }} />
                <span
                    style={{ fontSize: '10px' }}
                    className="position-absolute top-1 start-90 translate-middle badge rounded-pill bg-danger"
                >
                    99<span className="visually-hidden">unread messages</span>
                </span>
            </Button>
            <Offcanvas
                style={{ padding: '20px', maxWidth: '400px' }}
                isOpen={isOpen}
                toggle={() => setIsOpen((prev) => !prev)}
                direction={'end'}
            >
                <OffcanvasHeader toggle={() => setIsOpen((prev) => !prev)} style={{ paddingBottom: '0' }}>
                    <strong style={{ fontSize: '1.8rem' }}>Wishlist</strong>
                </OffcanvasHeader>
                <OffcanvasBody style={{ paddingTop: '0', marginBottom: '80px' }}>
                    <Row>
                        <Col>
                            {fakeProducts.map((_item, index) => (
                                <div key={index}>
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
                                </div>
                            ))}
                        </Col>
                    </Row>
                </OffcanvasBody>
                <Button
                    size="lg"
                    color="primary"
                    href="#"
                    tag="a"
                    style={{
                        fontSize: '2rem',
                        padding: '6px 0',
                        width: '90%',
                        margin: '30px 0',
                        bottom: '0',
                        right: '20px',
                    }}
                    className="position-absolute"
                >
                    Xem Wishlist
                </Button>
            </Offcanvas>
        </div>
    );
}

export default OffcanvasWishlist;