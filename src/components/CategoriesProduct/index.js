import React from 'react';
import ProductItem from '../ProductItem';

const CategoriesProduct = () => {
    const fakeProducts = new Array(9).fill(1);

    return (
        <div className="my-5">
            <div className="row row-cols-2 row-cols-lg-3  row-cols-md-3 g-3 g-md-4">
                {fakeProducts.map((_item, index) => (
                    <div className="col" key={index}>
                        <ProductItem />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesProduct;
