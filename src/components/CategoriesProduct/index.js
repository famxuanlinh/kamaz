import React from 'react';
import ProductItem from '../ProductItem';

const CategoriesProduct = () => {
    return (
        <div className="my-5">
            <div className="row row-cols-2 row-cols-md-3 g-3">
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
                <div className="col">
                    <ProductItem />
                </div>
            </div>
        </div>
    );
};

export default CategoriesProduct;
