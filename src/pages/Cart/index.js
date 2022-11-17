import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import QuantityInput from '~/components/QuantityInput';
import { BASE_URL, IMG_URL } from '~/constants/env';
import { useCart } from '~/contexts/Cart/CartContext';
import { useLogin } from '~/contexts/Login/LoginContext';
import formatCurrency from '~/until/formatCurrency';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { products, handleUpdateCart, totalMoneyCart, handleDeleteItemInCart, handleCheckout } = useCart();

    const { userInfo } = useLogin();

    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div style={{ backgroundColor: 'white' }}>
                    <div style={{ padding: '30px' }}>
                        <h1 className="text-dark">Giỏ Hàng</h1>
                        {products.length > 0 ? (
                            <Table size="sm" style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                <thead>
                                    <tr>
                                        <th>Sản Phẩm</th>
                                        <th>Đơn Giá</th>
                                        <th>Số Lượng</th>
                                        <th>Thành Tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map((product) => (
                                        <tr key={product.id}>
                                            <td className="d-flex align-items-center">
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
                                            </td>
                                            <td className="pt-5">
                                                <span>{formatCurrency(product.attributes.price)}</span>
                                            </td>
                                            <td className="pt-4">
                                                <QuantityInput
                                                    onChange={(newQty) => handleUpdateCart(product.id, newQty)}
                                                    defaultQty={product.qty}
                                                />
                                            </td>
                                            <td className="pt-5">
                                                {formatCurrency(product.attributes.price * product.qty)}
                                            </td>
                                            <td className="pt-5">
                                                <button
                                                    className="btn"
                                                    onClick={() => handleDeleteItemInCart(product.id)}
                                                >
                                                    <FontAwesomeIcon
                                                        className="cus-btn-icon"
                                                        icon={faX}
                                                        style={{ fontSize: '1.6rem' }}
                                                    />
                                                </button>
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
                                Không Có Sản Phẩm Nào
                            </div>
                        )}
                    </div>
                </div>
                {products.length !== 0 ? (
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
                                                {/* <Link to="/don-hang"> */}
                                                <button
                                                    className="btn btn-primary btn-lg w-100"
                                                    style={{ fontSize: '20px' }}
                                                    onClick={handleCheckout}
                                                >
                                                    Mua Ngay
                                                </button>
                                                {/* </Link> */}
                                            </th>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Cart;
