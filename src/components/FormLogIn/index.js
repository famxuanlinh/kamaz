import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label, Form, Breadcrumb, InputGroupText, InputGroup } from 'reactstrap';
import { useLogin } from '~/contexts/Login/LoginContext';
import BreadcrumbProduct from '../BreadcrumbProduct';

const FormLogIn = () => {
    const { handleLogin } = useLogin();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault(); //Ngăn chặn refresh lại trang khi đăng nhập
        handleLogin({
            identifier: userInfo.email,
            password: userInfo.password,
        });
    };

    const handleDataChange = (e) => {
        const { name, value } = e.target;

        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

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
                                Đăng Nhập
                            </div>
                            <span className="px-3">|</span>
                            <Link to="/dang-ki">
                                <div className="btn " style={{ border: 'none', fontSize: '2.4rem', fontWeight: '600' }}>
                                    Đăng Kí
                                </div>
                            </Link>
                        </div>
                        <InputGroup style={{ fontSize: '2rem', marginBottom: '15px' }}>
                            <InputGroupText>@</InputGroupText>
                            <Input
                                required={true}
                                placeholder="Địa chỉ email"
                                name="email"
                                type="email"
                                style={{ fontSize: '1.6rem' }}
                                onChange={handleDataChange}
                            />
                        </InputGroup>{' '}
                        <InputGroup style={{ fontSize: '2rem' }}>
                            <InputGroupText>
                                <FontAwesomeIcon icon={faLock} />
                            </InputGroupText>
                            <Input
                                name="password"
                                placeholder="Mật Khẩu"
                                type="password"
                                style={{ fontSize: '1.6rem' }}
                                onChange={handleDataChange}
                            />
                        </InputGroup>
                        <FormGroup check className="d-flex justify-content-between pt-5 pb-3">
                            <span>
                                <Input
                                    id="exampleCheckbox"
                                    name="checkbox"
                                    style={{ float: 'none', marginRight: '1rem' }}
                                    type="checkbox"
                                />
                                <Label check for="exampleCheckbox">
                                    Ghi Nhớ
                                </Label>
                            </span>
                            <Link to="/quen-mat-khau" style={{ fontSize: '1.4rem' }}>
                                Quên Mật Khẩu?
                            </Link>
                        </FormGroup>
                        <button
                            className="btn btn-primary"
                            style={{ width: '100%', fontSize: '1.6rem' }}
                            onClick={handleSubmit}
                            type="submit"
                        >
                            Đăng Nhập
                        </button>
                    </Form>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    );
};

export default FormLogIn;
