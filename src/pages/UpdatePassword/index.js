import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label, Form, InputGroupText, InputGroup } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import { useLogin } from '~/contexts/Login/LoginContext';

const UpdatePassword = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
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
                            <div className="pb-4" style={{ fontSize: '2.4rem' }}>
                                Cập nhật mật khẩu
                            </div>

                            <InputGroup style={{ fontSize: '2rem', marginBottom: '15px' }}>
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroupText>

                                <Input
                                    required={true}
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Mật khẩu mới"
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
                                    required
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Xác nhận mật khẩu"
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
                                Cập nhật mật khẩu
                            </button>
                        </Form>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
