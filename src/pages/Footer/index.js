import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div style={{ backgroundColor: '#222' }}>
                <div className="container">
                    <footer className="row row-cols-5 py-5 d-flex">
                        <div className="col-8 col-lg-5">
                            <Link className="navbar-brand " to="/">
                                <img
                                    src="https://kamaztrade.com/sites/all/themes/jipn/images/logo.png"
                                    alt="kamaz"
                                    height="60"
                                />
                                <span style={{ color: 'white', fontSize: '1.6rem', paddingLeft: '2rem' }}>
                                    KAMAZ TRADE Limited.
                                </span>
                            </Link>
                            <p className="text-muted pt-4">Chúng tôi thực hiện công tác sửa chữa xe tải.</p>
                        </div>

                        <div className="col-4 col-lg-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Trang Chủ
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Sửa chữa
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Phụ Tùng
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Tuyển Dụng
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Thông Tin Liên Hệ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-lg-4">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <a href="#" className="nav-link p-0 text-muted">
                                        Xin Hãy Liên Hệ Với Chúng Tối
                                    </a>
                                </li>
                                <li className="nav-item mb-2 text-muted">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{ fontSize: '1.6rem', paddingRight: '1rem' }}
                                    />{' '}
                                    <span>09643 47 450 (phòng dịch vụ)</span>
                                </li>
                                <li className="nav-item mb-2 text-muted">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        style={{ fontSize: '1.6rem', paddingRight: '1rem' }}
                                    />{' '}
                                    <span>info@kamaztrade.com</span>
                                </li>
                                <li className="nav-item mb-2 text-muted">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        style={{ fontSize: '1.6rem', paddingRight: '1rem' }}
                                    />{' '}
                                    <span>09643 47 450 (phòng dịch vụ)</span>
                                </li>
                                <li className="nav-item mb-2 text-muted">
                                    <FontAwesomeIcon
                                        icon={faLocationDot}
                                        style={{ fontSize: '1.6rem', paddingRight: '1rem' }}
                                    />{' '}
                                    <span>
                                        Lô R1 & R2, Đường D2 & N3, KCN. Nam Tân Uyên, phường Uyên Hưng, Thị xã Tân Uyên,
                                        tỉnh Bình Dương, Việt Nam
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
            <div style={{ backgroundColor: '#1d1d1d' }}>
                <div className="container">
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                        <div className="col-md-4 d-flex align-items-center">
                            <span className="text-muted">&copy; 2022 Kamaz Trade</span>
                        </div>

                        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon icon={faFacebook} />{' '}
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon icon={faTwitter} />{' '}
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="text-muted" href="#">
                                    <FontAwesomeIcon icon={faWhatsapp} />{' '}
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default Footer;
