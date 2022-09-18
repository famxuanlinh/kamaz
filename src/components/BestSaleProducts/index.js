import React from 'react';
import ProductItem from '../ProductItem';

const BestSaleProducts = () => {
    const fakeProducts = new Array(8).fill(1);

    return (
        <div>
            <div className="container">
                <h1 style={{ marginTop: '6rem', paddingLeft: '1rem', marginBottom: '1rem' }}>Sản Phẩm Bán Chạy</h1>

                <div className="row row-cols-2 row-cols-lg-4 g-3 g-md-4">
                    {fakeProducts.map((_item, index) => (
                        <div className="col" key={index}>
                            <ProductItem />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSaleProducts;
