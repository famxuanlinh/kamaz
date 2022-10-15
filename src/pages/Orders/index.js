import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import QuantityInput from '~/components/QuantityInput';
import { BASE_URL } from '~/constants/env';
import { useCart } from '~/contexts/Cart/CartContext';
import { useLogin } from '~/contexts/Login/LoginContext';
import formatCurrency from '~/until/formatCurrency';
import { useSearchParams } from 'react-router-dom';

const Orders = () => {
    const { userInfo } = useLogin();
    console.log('🚀 ~ file: index.js ~ line 16 ~ Orders ~ userInfo', userInfo);

    const [ordersProducts, setOrdersProducts] = useState([]);
    // const [searchParams] = useSearchParams();

    const getOrders = () => {
        fetch(`${BASE_URL}/orders?filters[orderBy]=${userInfo?.id}`, {
            headers: {
                Authorization: `Bearer ${userInfo?.jwt}`,
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setOrdersProducts(res.data);
            });
    };

    useEffect(() => {
        getOrders();
    }, [userInfo]);
    //Thêm useInfo và attribiu vì nếu ko thêm thì reset lại ko có user

    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                {/* {isType ? 'Thank you' : ''} */}
                <div style={{ backgroundColor: 'white' }}>
                    <div style={{ padding: '30px' }}>
                        <h1 className="text-dark">Lịch sử đơn hàng</h1>
                        {ordersProducts?.length ? (
                            <Table size="sm">
                                <thead>
                                    <tr className="text-center">
                                        <th>Mã vận đơn</th>
                                        <th>Trạng thái</th>
                                        <th>Tổng Tiền</th>
                                        <th>Ngày</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ordersProducts?.map((order) => (
                                        <tr key={order.id} className="text-center">
                                            <td className="d-flex align-items-center py-3">
                                                <Link
                                                    to={`/don-hang/${order.attributes.code}`}
                                                    className="text-primary"
                                                    style={{ fontWeight: '600' }}
                                                >
                                                    {order.attributes.code}
                                                </Link>
                                            </td>
                                            <td className="text-center py-3">
                                                {order.attributes.status === 'pending' ? (
                                                    <span
                                                        className="text-primary p-2"
                                                        style={{
                                                            backgroundColor: 'rgb(180 208 225)',
                                                            fontWeight: '600',
                                                        }}
                                                    >
                                                        Đang xử lý
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="text-success p-2"
                                                        style={{
                                                            backgroundColor: 'rgb(180 225 188)',
                                                            fontWeight: '600',
                                                        }}
                                                    >
                                                        Đã xử lý
                                                    </span>
                                                )}
                                            </td>
                                            <td className="py-3">{formatCurrency(4654656)}</td>
                                            <td className="py-3">
                                                {new Date(order.attributes.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        ) : (
                            <div
                                className="d-flex justify-content-center "
                                style={{ fontSize: '20px', margin: '100px 0' }}
                            >
                                Không có đơn hàng nào
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
