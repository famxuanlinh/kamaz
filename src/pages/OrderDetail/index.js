import { faCheck, faCircleCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import QuantityInput from '~/components/QuantityInput';
import { useCart } from '~/contexts/Cart/CartContext';
import formatCurrency from '~/until/formatCurrency';
import { useSearchParams, useParams } from 'react-router-dom';
import { useLogin } from '~/contexts/Login/LoginContext';
import { BASE_URL, IMG_URL } from '~/constants/env';
import getUserDataFromLocalStorage from '~/until/getUserDataFromLocalStorage';

const OrderDetail = () => {
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const isThankYou = searchParams.get('type');
    const [order, setOrder] = useState(null);
    const [products, setProducts] = useState([]);
    //Dùng 2 state để map ra cho tiện ko dài dòng. Có thể dùng mỗi state oder

    const totalOrder = products?.reduce((prev, product) => prev + product.attributes.price * product.qty, 0);

    const getOrder = (id) => {
        const user = getUserDataFromLocalStorage();
        if (!user?.id) return;
        fetch(`${BASE_URL}/orders?filters[orderBy]=${user.id}&filters[code]=${id}&populate=deep,3`, {
            headers: {
                Authorization: `Bearer ${user?.jwt}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                const orderData = res?.data[0];
                if (orderData) {
                    setOrder(orderData?.attributes);
                    setProducts(orderData.attributes?.products || []);
                }
            });
    };

    useEffect(() => {
        getOrder(id);
    }, []);

    if (!order) return null;
    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div style={{ backgroundColor: 'white' }}>
                    <div style={{ padding: '30px' }}>
                        {isThankYou ? (
                            <div className="text-center py-5">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-success"
                                        style={{ fontSize: '4rem' }}
                                    />
                                </div>
                                <div style={{ fontSize: '2rem' }}>CẢM ƠN VÌ BẠN ĐÃ MUA HÀNG</div>
                                <div className="pt-3">
                                    Mã đơn hàng: <span className="text-primary fw-bold">{order.code}</span>
                                </div>
                                <button className="btn btn-secondary">Coppy mã đơn hàng</button>
                                <div className="py-4">Địa chỉ: {order.address}</div>
                                <div className="text-muted">
                                    Bạn hãy copy mã đơn hàng ở trên và gửi qua zalo để được giao hàng ngay.
                                </div>
                                <button className="btn btn-primary btn-lg my-2">Liên hệ ngay qua Zalo</button>
                            </div>
                        ) : null}
                        <h1 className="text-dark">Chi tiết đơn hàng</h1>
                        <h4 className="text-dark">{new Date(order.createdAt).toLocaleDateString()}</h4>
                        <Table size="sm">
                            <thead>
                                <tr className="text-center">
                                    <th>Sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products?.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <Link
                                                className="d-flex align-items-center"
                                                to={`/san-pham/${product.attributes.slug}`}
                                            >
                                                <img
                                                    alt="Card image cap"
                                                    src={`${IMG_URL}${product.attributes.images?.data[0].attributes.formats.small.url}`}
                                                    style={{
                                                        aspectRatio: '1 / 1',
                                                        objectFit: 'cover',
                                                        width: '60px',
                                                        marginRight: '10px',
                                                        marginBottom: '10px',
                                                        marginTop: '10px',
                                                    }}
                                                />
                                                <div>
                                                    <div>{product.attributes.name}</div>
                                                    <div>sku: {product.attributes.sku}</div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="text-center">{formatCurrency(product.attributes.price)}</td>
                                        <td className="text-center">{product.qty}</td>
                                        <td className="text-center">
                                            {formatCurrency(product.attributes.price * product.qty)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="pb-5 pt-4" style={{ backgroundColor: '#f7f7f7' }}>
                    <div className="d-flex justify-content-end">
                        <div className="p-4" style={{ width: '420px', backgroundColor: 'white' }}>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <td>Giảm Giá</td>
                                        <th className="text-end text-dark">{formatCurrency(56666)}</th>
                                    </tr>
                                    <tr>
                                        <th style={{ color: '#1f3f81', fontSize: '20px' }}>Tổng Tiền</th>
                                        <th className="text-end text-dark">{formatCurrency(totalOrder)}</th>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
