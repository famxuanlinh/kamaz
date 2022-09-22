import React from 'react';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import NewProducts from '~/components/NewProducts';
import ProductDetailDesc from '~/components/ProductDetailDesc';
import ProductInfo from '~/components/ProductInfo';

const ProductPage = () => {
    return (
        <div style={{ backgroundColor: '#f7f7f7', paddingBottom: '30px' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div className="py-4">
                    <ProductInfo />
                </div>
                {/* <ProductDetailDesc /> */}
            </div>
            <NewProducts slug={'ban-chay'} />
        </div>
    );
};

export default ProductPage;
