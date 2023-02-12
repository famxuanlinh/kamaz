import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label, Form, InputGroupText, InputGroup } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import { useLogin } from '~/contexts/Login/LoginContext';

const UpdatePassword = () => {
    const { handleUpdatePassword } = useLogin();
    const [password, setPassword] = useState({
        currentPassword: '',
        password: '',
        passwordConfirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdatePassword({
            currentPassword: password.currentPassword,
            password: password.password,
            passwordConfirmation: password.passwordConfirmation,
        });
    };

    const handleDataChange = (e) => {
        const { name, value } = e.target;

        setPassword((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    // console.log(password);

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div style={{ background: 'white' }}>
                    <div className="row align-items-center">
                        <div className="col-0 col-lg-3"></div>
                        <Form
                            className="col align-items-center justify-content-center shadow me-5 ms-5  "
                            style={{
                                backgroundColor: 'white',
                                padding: '6rem 3.2rem',
                                borderRadius: '0.5rem',
                                margin: '10rem 0',
                            }}
                            onSubmit={handleSubmit}
                        >
                            <div className="pb-4" style={{ fontSize: '2.4rem' }}>
                                Thay đổi mật khẩu
                            </div>

                            <InputGroup style={{ fontSize: '2rem', marginBottom: '15px' }}>
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroupText>

                                <Input
                                    required={true}
                                    id="examplePassword"
                                    name="currentPassword"
                                    placeholder="Mật khẩu hiện tại"
                                    type="password"
                                    style={{ fontSize: '1.6rem' }}
                                    onChange={handleDataChange}
                                />
                            </InputGroup>
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
                                    onChange={handleDataChange}
                                />
                            </InputGroup>
                            <InputGroup style={{ fontSize: '2rem' }}>
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroupText>

                                <Input
                                    required
                                    id="examplePassword"
                                    name="passwordConfirmation"
                                    placeholder="Xác nhận mật khẩu"
                                    type="password"
                                    style={{ fontSize: '1.6rem' }}
                                    onChange={handleDataChange}
                                />
                            </InputGroup>
                            <button
                                className="btn btn-primary mt-5"
                                style={{ width: '100%', fontSize: '1.6rem' }}
                                type="submit"
                            >
                                Thay đổi mật khẩu
                            </button>
                        </Form>
                        <div className="col-0 col-lg-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePassword;
