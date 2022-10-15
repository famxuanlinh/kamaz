import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '~/constants/env';
import ProductItem from '../ProductItem';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Services = ({ slug }) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div className="row d-flex justify-content-center align-items-center" style={{ maxHeight: '550px' }}>
            <div className="col ps-5 ">
                <div className="row text-center text-xl-start">
                    <div className="col-0 col-xl-3 col-xxl-4 "></div>
                    <div className="col-12 col-xl-9 col-xxl-8  ">
                        <div className="text-primary mb-4" style={{ letterSpacing: '3px', fontWeight: '600' }}>
                            {' '}
                            <span>/ </span>Trung tâm dịch vụ sửa chữa xe tải
                        </div>
                        <div
                            style={{ fontSize: '5rem', fontWeight: '600', lineHeight: 'initial', letterSpacing: '3px' }}
                        >
                            CÁC LOẠI HÌNH <br /> SỬA CHỮA
                        </div>
                        <ul style={{ fontSize: '2rem' }} className="py-5 ps-0">
                            <Link to="/">
                                <li>Chuẩn đoán</li>
                            </Link>
                            <Link to="/">
                                <li>Sửa chữa và đại tu động cơ</li>
                            </Link>
                            <Link to="/">
                                <li>Hệ thống khung gầm và truyền động </li>
                            </Link>
                            <Link to="/">
                                <li>Hệ thống điện</li>
                            </Link>
                            <Link to="/">
                                <li>Hệ thống lái</li>
                            </Link>
                            <Link to="/">
                                <li>Hệ thống phanh</li>
                            </Link>
                            <Link to="/">
                                <li>Hệ thống nhiên liệu</li>
                            </Link>
                            <Link to="/">
                                <li>Đồng sơn và phủ dinitrol chống rỉ</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-none d-xl-flex col ">
                <img
                    src="/service1.jpg"
                    alt="service 1"
                    style={{ width: '100%', height: '100%', clipPath: 'polygon(200px 0px, 0 100%, 100% 100%, 100% 0)' }}
                ></img>
            </div>
        </div>
    );
};

export default Services;
