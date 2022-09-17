import React from 'react';
import ProductItem from '../ProductItem';

const PopularProducts = () => {
    return (
        <div>
            <div className="container">
                <h1 style={{ marginTop: '6rem', paddingLeft: '1rem', marginBottom: '1rem' }}>Sản Phẩm Phổ Biến</h1>

                <div className="row row-cols-2 row-cols-lg-4 g-3 bg-white">
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

export default PopularProducts;
