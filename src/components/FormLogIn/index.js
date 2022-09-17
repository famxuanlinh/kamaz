import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, Input, Label, Form } from 'reactstrap';

const FormLogIn = () => {
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
                        <Link to="/dang-ki">
                            <button
                                className="btn "
                                style={{
                                    border: 'none',
                                    fontSize: '2rem',
                                    color: 'red',
                                    fontWeight: '600',
                                }}
                            >
                                Đăng Nhập
                            </button>
                        </Link>
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
                    <Button style={{ width: '100%', backgroundColor: '#0d6efd', fontSize: '1.6rem' }}>Đăng Nhập</Button>
                </Form>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default FormLogIn;
