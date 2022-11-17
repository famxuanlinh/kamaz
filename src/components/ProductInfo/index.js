import { faHeart, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import formatCurrency from '~/until/formatCurrency';
import './ProductInfo.css';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '~/contexts/Cart/CartContext';
import QuantityInput from '../QuantityInput';
import { Table } from 'reactstrap';
import { BASE_URL } from '~/constants/env';
import ProductsDetail from '../ProductsDetail';

function ProductInfo() {
    const [product, setProduct] = useState(null);
    const { slug } = useParams();

    const getProduct = (slug) => {
        fetch(`${BASE_URL}/products?filters[slug]=${slug}&populate=deep,3`)
            .then((res) => res.json())
            .then((res) => {
                if (Array.isArray(res.data) && res.data.length > 0) setProduct(res.data[0]);
            });
    };

    useEffect(() => {
        getProduct(slug);
        window.scrollTo(0, 100);
    }, [slug]);

    if (!product) return <div>Loading...</div>;

    return (
        <>
            <ProductsDetail product={product} showMoreInfo={true} />
            <div style={{ backgroundColor: 'white', marginTop: '30px' }}>
                <div className="p-5 ">
                    <h2 style={{ fontSize: '3rem' }}>Chi Tiết Sản Phẩm:</h2>
                    <Table borderless>
                        <tbody>
                            <tr>
                                <th scope="row" className="col-4">
                                    Cân Nặng, g
                                </th>
                                <td className="col-8">
                                    {product.attributes.weight != null ? product.attributes.weight : '-'}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Chiều dài, cm </th>
                                <td>{product.attributes.length != null ? product.attributes.length : '-'}</td>
                            </tr>
                            <tr>
                                <th scope="row">Chiều Rộng, cm</th>
                                <td>{product.attributes.width != null ? product.attributes.width : '-'}</td>
                            </tr>
                            <tr>
                                <th scope="row">Chiều Cao, cm</th>
                                <td>{product.attributes.height != null ? product.attributes.height : '-'}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="px-5 pb-5">
                    <h2 style={{ fontSize: '3rem' }}>Mô Tả Sản Phẩm:</h2>
                    <div>
                        <div>{product.attributes.description}</div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                        mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                        interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
                        auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
                        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam
                        sit amet lacinia.
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductInfo;
