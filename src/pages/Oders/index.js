import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import QuantityInput from '~/components/QuantityInput';
import { useCart } from '~/contexts/Cart/CartContext';
import formatCurrency from '~/until/formatCurrency';

const Oders = () => {
    const { handleUpdateCart, totalMoneyCart, handleDeleteItemInCart } = useCart();

    const fakeApi = new Array(3).fill(0);
    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div style={{ backgroundColor: 'white' }}>
                    <div style={{ padding: '30px' }}>
                        <h1 className="text-dark">Lịch sử đơn hàng</h1>
                        {fakeApi.length > 0 ? (
                            <Table size="sm">
                                <thead>
                                    <tr>
                                        <th>Mã vận đơn</th>
                                        <th>Trạng thái</th>
                                        <th>Số Lượng</th>
                                        <th>Tổng Tiền</th>
                                        <th>Ngày</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fakeApi?.map((product) => (
                                        <tr key={product.id}>
                                            <td className="d-flex align-items-center py-2">
                                                <div>65sfd6sfd65sdf65</div>
                                            </td>
                                            <td>Đã giao</td>
                                            <td>1</td>
                                            <td>{formatCurrency(4654656)}</td>
                                            <td>28/09/2022</td>
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
                <div className="pb-5 pt-4" style={{ backgroundColor: '#f7f7f7' }}>
                    <div className="d-flex justify-content-end">
                        <div className="p-4" style={{ width: '420px', backgroundColor: 'white' }}>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <td>Thành Tiền</td>
                                        <th className="text-end text-dark">{formatCurrency(totalMoneyCart)}</th>
                                    </tr>
                                    <tr>
                                        <td>Giảm Giá</td>
                                        <th className="text-end text-dark">{formatCurrency(0)}</th>
                                    </tr>
                                    <tr>
                                        <th style={{ color: '#1f3f81', fontSize: '20px' }}>Tổng Tiền</th>
                                        <th className="text-end text-dark">{formatCurrency(totalMoneyCart)}</th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <Link to="/danh-muc/tat-ca-san-pham">
                                                <button
                                                    className="btn btn-light btn-lg w-100"
                                                    style={{ fontSize: '20px' }}
                                                >
                                                    Cửa Hàng
                                                </button>
                                            </Link>
                                        </th>
                                        <th className="text-end">
                                            <Link to="/">
                                                <button
                                                    className="btn btn-primary btn-lg w-100"
                                                    style={{ fontSize: '20px' }}
                                                >
                                                    Mua Ngay
                                                </button>
                                            </Link>
                                        </th>
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

export default Oders;
