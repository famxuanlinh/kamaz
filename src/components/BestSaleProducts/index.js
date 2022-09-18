import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ProductItem from '../ProductItem';

const BestSaleProducts = () => {
    const fakeProducts = new Array(8).fill(1);

    return (
        <div>
            <div className="container">
                <h2 className="title-products-home">
                    <FontAwesomeIcon icon={faMinus} style={{ color: '#1f3f81', paddingRight: '0.5rem' }} /> SẢN PHẨM{' '}
                    <span style={{ fontWeight: '600' }}>BÁN CHẠY</span>
                </h2>
                <div className="col-12">
                    <div className="container">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
                            {fakeProducts.map((_item, index) => (
                                <div className="col" key={index}>
                                    <ProductItem />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSaleProducts;
