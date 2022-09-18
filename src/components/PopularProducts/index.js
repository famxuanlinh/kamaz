import React from 'react';
import ProductItem from '../ProductItem';

const PopularProducts = () => {
    const fakeProducts = new Array(8).fill(1);
    return (
        <div>
            <div className="container">
                <h2 style={{ marginTop: '6rem', paddingLeft: '1rem', marginBottom: '1rem' }}>Sản Phẩm Phổ Biến</h2>

                <div className="col-12">
                    <div className="container">
                        <div className="row row-cols-2 row-cols-lg-4 g-3 g-md-4">
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

export default PopularProducts;
