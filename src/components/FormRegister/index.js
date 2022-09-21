import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label, Form } from 'reactstrap';

const FormRegister = () => {
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
                            Đăng Ký
                        </button>
                        <span className="px-3">|</span>
                        <Link to="/dang-nhap">
                            <button className="btn " style={{ border: 'none', fontSize: '2rem', fontWeight: '600' }}>
                                Đăng Nhập
                            </button>
                        </Link>
                    </div>
                    <FormGroup>
                        <Label for="examplePassword" hidden>
                            Tên Tài Khoản
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Tên Tài Khoản"
                            type="password"
                            style={{ fontSize: '1.6rem' }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail" hidden>
                            Địa Chỉ Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Địa Chỉ Email"
                            type="email"
                            style={{ fontSize: '1.6rem' }}
                        />
                    </FormGroup>{' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden>
                            Mật Khẩu
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Mật Khẩu"
                            type="password"
                            style={{ fontSize: '1.6rem' }}
                        />
                    </FormGroup>
                    {/* <FormGroup check className="d-flex justify-content-between pt-5 pb-3">
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
                    </FormGroup> */}
                    <button className="btn btn-primary mt-4" style={{ width: '100%', fontSize: '1.6rem' }}>
                        Đăng Ký
                    </button>
                </Form>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default FormRegister;
