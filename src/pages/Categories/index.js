import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import CategoriesProduct from '~/components/CategoriesProduct';
import Sidebar from '~/components/Sidebar';

const Categories = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 100);
    }, [slug]);
    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div className="row">
                    <div className="col-0 col-lg-3 d-none d-lg-block">
                        <Sidebar />
                    </div>
                    <div className=" col-12 col-lg-9">
                        <CategoriesProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
