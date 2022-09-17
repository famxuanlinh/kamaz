import { faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactMap = () => {
    return (
        <div>
            <div className="container" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <h1 className="d-flex  justify-content-center" style={{ marginTop: '6rem', marginBottom: '2.2rem' }}>
                    XIN HÃY LIÊN HỆ VỚI CHÚNG TÔI
                </h1>
                <div className="row ">
                    <div className="col text-center">
                        <h3>Số Điện Thoại</h3>
                        <div>
                            <FontAwesomeIcon icon={faPhone} style={{ fontSize: '1.6rem', color: 'black' }} />{' '}
                            <span>09643 47 450</span>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <h3>Địa Chỉ</h3>
                        <div>
                            <FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '1.6rem', color: 'black' }} />{' '}
                            <span>
                                Lô R1 & R2, Đường D2 & N3, KCN. Nam Tân Uyên, phường Uyên Hưng, Thị xã Tân Uyên, tỉnh
                                Bình Dương, Việt Nam
                            </span>
                        </div>
                    </div>
                    <div className="col text-center">
                        <h3>Email</h3>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.6rem', color: 'black' }} />{' '}
                            <span>info@kamaztrade.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ paddingBottom: '2rem' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.2881366725464!2d106.7772488153573!3d11.091889856323112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174c56eeef757f5%3A0x1197857421a29ea!2sKAMAZ%20SERVICE%20CENTER!5e0!3m2!1svi!2shk!4v1663307004327!5m2!1svi!2shk"
                    width="100%"
                    height="500"
                    // allowfullscreen=""
                    loading="lazy"
                    // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactMap;
