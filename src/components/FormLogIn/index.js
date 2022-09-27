import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label, Form } from 'reactstrap';
import { useLogin } from '~/contexts/Login/LoginContext';

const FormLogIn = () => {
    const { handleLogin } = useLogin();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    console.log(userInfo);

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <div className="row align-items-center">
                <div className="col"></div>
                <Form
                    className="col align-items-center justify-content-center"
                    style={{
                        maxWidth: '368px',
                        backgroundColor: 'white',
                        padding: '6rem 3.2rem',
                        borderRadius: '0.5rem',
                    }}
                >
                    <div className="pb-4">
                        <button
                            className="btn "
                            style={{
                                border: 'none',
                                fontSize: '2.4rem',
                                color: 'red',
                                fontWeight: '600',
                            }}
                        >
                            Đăng Nhập
                        </button>
                        <span className="px-3">|</span>
                        <Link to="/dang-ki">
                            <button className="btn " style={{ border: 'none', fontSize: '2rem', fontWeight: '600' }}>
                                Đăng Kí
                            </button>
                        </Link>
                    </div>
                    <FormGroup>
                        <Label for="exampleEmail" hidden>
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Email"
                            type="email"
                            style={{ fontSize: '1.6rem' }}
                            onChange={handleDataChange}
                        />
                    </FormGroup>{' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden>
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Mật Khẩu"
                            type="password"
                            style={{ fontSize: '1.6rem' }}
                            onChange={handleDataChange}
                        />
                    </FormGroup>
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
                        <Link to="/" style={{ fontSize: '1.4rem' }}>
                            Quên Mật Khẩu?
                        </Link>
                    </FormGroup>
                    <button
                        className="btn btn-primary"
                        style={{ width: '100%', fontSize: '1.6rem' }}
                        onClick={handleSubmit}
                    >
                        Đăng Nhập
                    </button>
                </Form>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default FormLogIn;
