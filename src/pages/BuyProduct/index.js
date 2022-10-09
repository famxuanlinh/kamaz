import { faCheck, faCircleCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import QuantityInput from '~/components/QuantityInput';
import { useCart } from '~/contexts/Cart/CartContext';
import formatCurrency from '~/until/formatCurrency';

const BuyProduct = () => {
    const { handleUpdateCart, totalMoneyCart, handleDeleteItemInCart } = useCart();

    const fakeApi = new Array(3).fill(0);
    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div style={{ backgroundColor: 'white' }}>
                    <div style={{ padding: '30px' }}>
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
                                Mã đơn hàng: <span className="text-primary fw-bold">s465sdg465ds645sdg</span>
                            </div>
                            <button className="btn btn-secondary">Coppy mã đơn hàng</button>
                            <div className="py-4">
                                Địa chỉ: 60, đường Phú Thuận, Phường Phú Thuận, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                            </div>
                            <div className="text-muted">
                                Bạn hãy copy mã đơn hàng ở trên và gửi qua zalo để được giao hàng ngay.
                            </div>
                            <button className="btn btn-primary btn-lg my-2">Liên hệ ngay qua Zalo</button>
                        </div>
                        <h1 className="text-dark">Chi tiết đơn hàng</h1>
                        <h4 className="text-dark">28/09/2022</h4>
                        <Table size="sm">
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Đơn giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeApi?.map((product) => (
                                    <tr key={product.id}>
                                        <td className="d-flex align-items-center">
                                            <img
                                                alt="Card image cap"
                                                src="https://picsum.photos/300/200"
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
                                                <div>Hello</div>
                                                <div>sku: 65545454</div>
                                            </div>
                                        </td>
                                        <td>{formatCurrency(4654656)}</td>
                                        <td>1</td>
                                        <td>{formatCurrency(4654656)}</td>
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
                                        <th className="text-end text-dark">{formatCurrency(645654654)}</th>
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

export default BuyProduct;
