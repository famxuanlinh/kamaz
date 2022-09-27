import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { BASE_URL } from '~/constants/env';
import PaginationProducts from '../Pagination';
import ProductItem from '../ProductItem';

const CategoriesProduct = () => {
    const [products, setProducts] = useState([]);
    //Lấy slug trên thanh search
    const { slug } = useParams();
    const [pageProps, setPageProps] = useState({
        sort: 'createdAt:asc',
        rowPerPage: 10,
        totalPages: 1,
        currentPage: 1,
    });

    const getProducts = (slug) => {
        if (slug === 'tat-ca-san-pham') {
            fetch(
                `${BASE_URL}/products?pagination[page]=${pageProps.currentPage}&pagination[pageSize]=12&sort[0]=createdAt&populate=deep,3`,
            )
                .then((res) => res.json())
                .then((res) => {
                    setPageProps({
                        ...pageProps,
                        totalPages: res.meta.pagination.pageCount,
                    });
                    setProducts(res.data);
                });
        } else {
            fetch(
                `${BASE_URL}/products?filters[categories][slug]=${slug}&pagination[page]=${pageProps.currentPage}&pagination[pageSize]=12&sort[0]=createdAt&populate=deep,2`,
            )
                .then((res) => res.json())
                .then((res) => {
                    setPageProps({
                        ...pageProps,
                        currentPage: 1,
                        totalPages: res.meta.pagination.pageCount,
                    });
                    setProducts(res.data);
                });
        }
    };

    useEffect(() => {
        getProducts(slug);
    }, [pageProps.currentPage, slug]);

    const handleChangePage = (newPage) => {
        setPageProps({
            ...pageProps,
            currentPage: newPage,
        });
    };

    return (
        <>
            <div
                className="shadow"
                style={{
                    backgroundColor: 'white',
                    padding: '1.2rem 4rem',
                    borderRadius: '0.5rem',
                }}
            >
                <Button
                    color="secondary"
                    href="#"
                    tag="a"
                    style={{
                        fontSize: '2rem',
                        color: '#777',
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                >
                    Mới Nhất
                </Button>{' '}
                <Button
                    color="secondary"
                    tag="input"
                    type="submit"
                    value="Giá Thấp"
                    style={{
                        fontSize: '2rem',
                        color: '#777',
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                />{' '}
                <Button
                    color="secondary"
                    tag="input"
                    type="reset"
                    value="Giá Cao"
                    style={{
                        fontSize: '2rem',
                        color: '#777',
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}
                />{' '}
            </div>
            <div className="my-5">
                <div className="row  g-3 g-md-4">
                    {products.map((item, index) => (
                        <div className="col-6 col-md-4 col-lg-4" key={index}>
                            <ProductItem product={item} />
                        </div>
                    ))}
                </div>
            </div>
            {pageProps.totalPages > 1 ? (
                <PaginationProducts handleChangePage={handleChangePage} pageProps={pageProps} />
            ) : (
                <span></span>
            )}
        </>
    );
};

export default CategoriesProduct;
