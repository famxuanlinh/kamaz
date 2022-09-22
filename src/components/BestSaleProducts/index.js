import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '~/constants/env';
import ProductItem from '../ProductItem';

const BestSaleProducts = ({ slug }) => {
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);

    const getCategory = (slug) => {
        fetch(`${BASE_URL}/categories?filters[slug]=${slug}&populate=*`)
            .then((res) => res.json())
            .then((res) => {
                setCategory(res.data?.[0].attributes);
                setProducts(res.data[0].attributes.products.data);
            });
    };

    useEffect(() => {
        getCategory(slug);
    }, []);

    return (
        <div>
            <div className="container">
                <h2 className="title-products-home">
                    <FontAwesomeIcon icon={faMinus} style={{ color: '#1f3f81', paddingRight: '0.5rem' }} /> SẢN PHẨM{' '}
                    <span style={{ fontWeight: '600' }}>{category?.name}</span>
                </h2>
                <div className="col-12">
                    <div className="container">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
                            {products.map((item, index) => (
                                <div className="col" key={index}>
                                    <ProductItem product={item} />
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
