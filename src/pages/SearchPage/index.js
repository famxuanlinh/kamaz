import React from 'react';
import BreadcrumbProduct from '~/components/BreadcrumbProduct';
import PaginationProducts from '~/components/Pagination';
import ProductItem from '~/components/ProductItem';
import Sidebar from '~/components/Sidebar';
import { useSearch } from '~/contexts/SearchContext/SearchContext';

const SearchPage = () => {
    const { searchResult, pageProps, handleChangePage } = useSearch();
    return (
        <div>
            <div style={{ backgroundColor: '#f7f7f7' }}>
                <div className="container">
                    <BreadcrumbProduct />
                    <div className="row">
                        <div className="col-0 col-lg-3 d-none d-lg-block">
                            <Sidebar />
                        </div>
                        <div className=" col-12 col-lg-9">
                            <>
                                <div
                                    className="shadow"
                                    style={{
                                        backgroundColor: 'white',
                                        padding: '1.2rem 4rem',
                                        borderRadius: '0.5rem',
                                    }}
                                >
                                    Kết Quả Tìm Kiếm Của Bạn:
                                </div>
                                <div className="my-5">
                                    <div className="row  g-3 g-md-4">
                                        {searchResult.map((item) => (
                                            <div className="col-6 col-md-4 col-lg-4" key={item.id}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
