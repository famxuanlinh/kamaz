import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label, Form, InputGroupText, InputGroup } from 'reactstrap';
import { useLogin } from '~/contexts/Login/LoginContext';

import BreadcrumbProduct from '../BreadcrumbProduct';

const FormRegister = () => {
    // const { handleLogin } = useLogin();
    // const [userInfo, setUserInfo] = useState({
    //     email: '',
    //     password: '',
    // });

    // const handleSubmit = (e) => {
    //     e.preventDefault(); //Ngăn chặn refresh lại trang khi đăng nhập
    //     handleLogin({
    //         identifier: userInfo.email,
    //         password: userInfo.password,
    //     });
    // };

    // const handleDataChange = (e) => {
    //     const { name, value } = e.target;

    //     setUserInfo({
    //         ...userInfo,
    //         [name]: value,
    //     });
    // };
    return (
        <div className="container text-center">
            <BreadcrumbProduct />
            <div style={{ background: 'white' }}>
                <div className="row align-items-center">
                    <div className="col"></div>
                    <Form
                        className="col align-items-center justify-content-center shadow w-100"
                        style={{
                            backgroundColor: 'white',
                            padding: '6rem 3.2rem',
                            borderRadius: '0.5rem',
                            margin: '10rem 0',
                        }}
                    >
                        <div className="pb-4">
                            <div
                                className="btn "
                                style={{
                                    border: 'none',
                                    fontSize: '3rem',
                                    color: 'red',
                                    fontWeight: '600',
                                }}
                            >
                                Đăng Ký
                            </div>
                            <span className="px-3">|</span>
                            <Link to="/dang-nhap">
                                <button
                                    className="btn "
                                    style={{ border: 'none', fontSize: '2.4rem', fontWeight: '600' }}
                                >
                                    Đăng Nhập
                                </button>
                            </Link>
                        </div>
                        <InputGroup style={{ fontSize: '2rem', marginBottom: '15px' }}>
                            <InputGroupText>
                                <FontAwesomeIcon icon={faUser} />
                            </InputGroupText>
                            <Input
                                required={true}
                                placeholder="Tên"
                                type="email"
                                style={{ fontSize: '1.6rem' }}
                                // onChange={handleDataChange}
                            />
                        </InputGroup>{' '}
                        <InputGroup style={{ fontSize: '2rem', marginBottom: '15px' }}>
                            <InputGroupText>@</InputGroupText>
                            <Input
                                required={true}
                                placeholder="Địa chỉ email"
                                type="email"
                                style={{ fontSize: '1.6rem' }}
                                // onChange={handleDataChange}
                            />
                        </InputGroup>{' '}
                        <InputGroup style={{ fontSize: '2rem', marginBottom: '15px' }}>
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} />
                            </InputGroupText>

                            <Input
                                required={true}
                                id="examplePassword"
                                name="password"
                                placeholder="Mật Khẩu"
                                type="password"
                                style={{ fontSize: '1.6rem' }}
                                // onChange={handleDataChange}
                            />
                        </InputGroup>
                        <InputGroup style={{ fontSize: '2rem' }}>
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} />
                            </InputGroupText>

                            <Input
                                required={true}
                                id="examplePassword"
                                name="password"
                                placeholder="Mật Khẩu"
                                type="password"
                                style={{ fontSize: '1.6rem' }}
                                // onChange={handleDataChange}
                            />
                        </InputGroup>
                        <button
                            className="btn btn-primary mt-5"
                            style={{ width: '100%', fontSize: '1.6rem' }}
                            // onClick={handleSubmit}
                        >
                            Đăng Ký
                        </button>
                    </Form>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};

export default FormRegister;
