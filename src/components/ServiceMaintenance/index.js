import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '~/constants/env';
import ProductItem from '../ProductItem';

const ServiceMaintenance = ({ slug }) => {
    // const [category, setCategory] = useState(null);
    // const [products, setProducts] = useState([]);

    // const getCategory = (slug) => {
    //     fetch(`${BASE_URL}/categories?filters[slug]=${slug}&populate=deep,3`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             setCategory(res.data?.[0].attributes);
    //             setProducts(res.data[0].attributes.products.data);
    //         });
    // };

    // useEffect(() => {
    //     getCategory(slug);
    // }, []);

    return (
        <div className="row d-flex justify-content-center align-items-center g-0" style={{ maxHeight: '550px' }}>
            <div className="d-none d-xl-flex col">
                <img src="/service1.jpeg" alt="service 1" style={{ width: '100%' }}></img>
            </div>
            <div className="col ps-5 " style={{ position: 'relative' }}>
                <img
                    src="/service2.png"
                    alt="service 2"
                    style={{ position: 'absolute', width: '52%', bottom: '-8rem', right: '0' }}
                />
                <div className="text-primary mb-4" style={{ letterSpacing: '3px', fontWeight: '600' }}>
                    {' '}
                    <span>/ </span>Trung tâm dịch vụ sửa chữa xe tải
                </div>
                <div style={{ fontSize: '5rem', fontWeight: '600', lineHeight: 'initial', letterSpacing: '3px' }}>
                    DỊCH VỤ <br /> BẢO TRÌ <br /> BẢO DƯỠNG
                </div>
                <div className="text-secondary py-5" style={{ width: '50%' }}>
                    Bất kỳ chiếc xe nào muốn vận hành không gặp sự cố cũng cần được bảo trì thường xuyên
                    <span className="d-xl-none d-xxl-flex">
                        , dịch vụ hướng tới mục đích duy trì khả năng vận hành của tất cả các bộ phận linh kiện trên xe.
                        Việc bảo dưỡng thường xuyên có vai trò vô cùng quan trọng đối với xe tải, vì đây ...
                    </span>
                </div>
                <Link to="/sua-chua/bao-tri-bao-duong">
                    <button className="btn  btn-primary btn-lg px-5" style={{ fontSize: '2.4rem' }}>
                        Chi tiết
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceMaintenance;
