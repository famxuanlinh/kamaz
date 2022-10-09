import { faEye, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label, Form, Breadcrumb, InputGroupText, InputGroup } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import { useLogin } from '~/contexts/Login/LoginContext';

// import React from 'react';

const ManageUser = () => {
    const { userInfo, handleUpdateCustomer } = useLogin();
    const [userPayload, setUserPayload] = useState({
        name: userInfo?.username || '',
        zalo: userInfo?.zalo || '',
        email: userInfo?.email || '',
        address: userInfo?.address || '',
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;

        setUserPayload({
            ...userPayload,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        handleUpdateCustomer();
    };
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container ">
                <BreadcrumbProduct />
                <div style={{ background: 'white' }}>
                    <div className="row align-items-center">
                        <div className="col-3"></div>
                        <Form
                            className="col align-items-center justify-content-center shadow w-100"
                            style={{
                                backgroundColor: 'white',
                                padding: '6rem 3.2rem',
                                borderRadius: '0.5rem',
                                margin: '10rem 0',
                                fontSize: '1.8rem',
                            }}
                        >
                            <div className="pb-4" style={{ fontSize: '2.4rem' }}>
                                Thông tin tài khoản
                            </div>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Tên <span style={{ color: 'red' }}>*</span>{' '}
                                </Label>
                                <Input
                                    required={true}
                                    id="exampleEmail"
                                    name="name"
                                    placeholder="Tên"
                                    type="text"
                                    style={{ fontSize: '1.6rem' }}
                                    value={userInfo.username}
                                    onChange={handleDataChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    required={true}
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Địa chỉ email"
                                    type="email"
                                    style={{ fontSize: '1.6rem' }}
                                    onChange={handleDataChange}
                                    value={userInfo.email}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Zalo (vui lòng cung cấp số zalo chính xác để hỗ giao hàng){' '}
                                    <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    required={true}
                                    id="exampleEmail"
                                    name="number phone"
                                    placeholder="Số điện thoại"
                                    type="text"
                                    onChange={handleDataChange}
                                    style={{ fontSize: '1.6rem' }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Địa chỉ <span style={{ color: 'red' }}>*</span>
                                </Label>
                                <Input
                                    required={true}
                                    id="exampleEmail"
                                    name="number phone"
                                    placeholder="Địa chỉ của bạn"
                                    type="text"
                                    onChange={handleDataChange}
                                    style={{ fontSize: '1.6rem' }}
                                />
                            </FormGroup>
                            <div className="text-muted py-2" style={{ fontSize: '1.2rem' }}>
                                {' '}
                            </div>
                            <button
                                className="btn btn-primary mt-4"
                                style={{ width: '100%', fontSize: '1.6rem' }}
                                onClick={handleSubmit}
                            >
                                Lưu
                            </button>
                        </Form>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;
