import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationProducts = ({ handleChangePage, pageProps }) => {
    const pages = new Array(pageProps.totalPages).fill(0).map((_item, index) => ++index);

    return (
        <div className="d-flex justify-content-end py-3">
            <Pagination aria-label="Page navigation example">
                <PaginationItem disabled>
                    <PaginationLink first href="#" style={{ fontSize: '2rem' }} />
                </PaginationItem>
                <PaginationItem disabled>
                    <PaginationLink href="#" previous style={{ fontSize: '2rem' }} />
                </PaginationItem>
                {pages.map((pageItem) => (
                    <PaginationItem active key={pageItem}>
                        <PaginationLink
                            type="button"
                            onClick={() => handleChangePage(pageItem)}
                            style={{ fontSize: '2rem', background: 'white', color: 'black' }}
                        >
                            {pageItem}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationLink type="button" next style={{ fontSize: '2rem' }} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" last style={{ fontSize: '2rem' }} />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default PaginationProducts;
