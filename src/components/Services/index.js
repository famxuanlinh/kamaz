import React, { useEffect, useState } from 'react';
import { BASE_URL } from '~/constants/env';
import { Link } from 'react-router-dom';

const Services = () => {
    const [service, setService] = useState([]);

    const getRepair = () => {
        fetch(`${BASE_URL}/repairs`)
            .then((res) => res.json())
            .then((res) => {
                setService(res.data);
            });
    };

    useEffect(() => {
        getRepair();
    }, []);

    return (
        <div className="row d-flex justify-content-center align-items-center g-0">
            <div className="col-xl-5 ps-5 ">
                <div className="row text-center ">
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
                        <ul style={{ fontSize: '2rem' }} className="py-5 ">
                            {service.map((item) => (
                                <Link to={`/sua-chua/${item.attributes.slug}`} key={item.id}>
                                    <li>{item.attributes.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-none d-xl-flex col-xl-7 " style={{ height: '550px' }}>
                <img
                    src="/service3.JPG"
                    alt="service 1"
                    style={{
                        width: '100%',
                        height: '100%',
                        clipPath: 'polygon(200px 0px, 0 100%, 100% 100%, 100% 0)',
                        objectFit: 'cover',
                    }}
                ></img>
            </div>
        </div>
    );
};

export default Services;
