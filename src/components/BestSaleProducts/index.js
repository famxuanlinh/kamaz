import React from 'react';
import ProductItem from '../ProductItem';

const BestSaleProducts = () => {
    return (
        <div>
            <div className="container">
                <h1 style={{ marginTop: '6rem', paddingLeft: '1rem', marginBottom: '1rem' }}>Sản Phẩm Bán Chạy</h1>

                <div className="row row-cols-2 row-cols-lg-4 g-3">
                    <div className="col">
                        <ProductItem />
                    </div>
                    <div className="col">
                        <ProductItem />
                    </div>
                    <div className="col">
                        <ProductItem />
                    </div>
                    <div className="col">
                        <ProductItem />
                    </div>
                    <div className="col">
                        <ProductItem />
                    </div>
                    <div className="col">
                        <ProductItem />
                    </div>
                    <div className="col">
                        <ProductItem />
                    </div>
                    <div className="col">
                        <ProductItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSaleProducts;
