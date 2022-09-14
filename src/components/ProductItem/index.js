import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import formatCurrency from '~/until/formatCurrency';

const ProductItem = () => {
    return (
        <div className="container" style={{ marginTop: '4rem' }}>
            {/* <CardGroup>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional content.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                    <CardBody>
                        <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Card subtitle
                        </CardSubtitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                            This card has even longer content than the first to show that equal height action.
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardGroup> */}
            <div>
                <h1 style={{ marginBottom: '1.4rem' }}>Sản phẩm bán chạy</h1>
            </div>

            <div className="row row-cols-2 row-cols-lg-4 g-4 g-lg-4">
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://phutungsaomai.vn/san-pham-21116/truc-can-bang-6520/"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
                <div className='className="col"'>
                    <Card>
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                            style={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
                        />
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
                            <CardText tag="h3" style={{ color: '#ea1b25' }}>
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
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
