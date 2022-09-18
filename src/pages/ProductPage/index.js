import React from 'react';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import Product from '~/components/Product';

const ProductPage = () => {
    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div className="py-4">
                    <Product />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
