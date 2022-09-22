import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '~/constants/env';
import ProductItem from '../ProductItem';

const CategoriesProduct = () => {
    const [products, setProducts] = useState([]);
    //Lấy slug trên thanh search
    const { slug } = useParams();

    const getProducts = (slug) => {
        if (slug === 'tat-ca-san-pham') {
            fetch(`${BASE_URL}/products`)
                .then((res) => res.json())
                .then((res) => {
                    setProducts(res.data);
                });
        } else {
            fetch(`${BASE_URL}/categories?filters[slug]=${slug}&populate=*`)
                .then((res) => res.json())
                .then((res) => {
                    setProducts(res.data[0].attributes.products.data);
                });
        }
    };

    useEffect(() => {
        getProducts(slug);
    }, [slug]);

    return (
        <div className="my-5">
            <div className="row row-cols-2 row-cols-lg-3  row-cols-md-3 g-3 g-md-4">
                {products.map((item, index) => (
                    <div className="col" key={index}>
                        <ProductItem product={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesProduct;
