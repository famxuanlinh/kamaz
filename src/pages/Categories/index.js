import React from 'react';
import { Button } from 'reactstrap';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import CategoriesProduct from '~/components/CategoriesProduct';
import PaginationProducts from '~/components/Pagination';
import Sidebar from '~/components/Sidebar';

const Categories = () => {
    return (
        <div style={{ backgroundColor: '#f7f7f7' }}>
            <div className="container">
                <BreadcrumbProduct />
                <div className="row">
                    <div className="col-0 col-lg-3 d-none d-lg-block">
                        <Sidebar />
                    </div>
                    <div className=" col-12 col-lg-9">
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
                        <div className="d-flex d-">
                            <CategoriesProduct />
                        </div>
                    </div>
                </div>
                <PaginationProducts />
            </div>
        </div>
    );
};

export default Categories;
