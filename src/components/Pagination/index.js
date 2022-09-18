import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationProducts = () => {
    return (
        <div className="d-flex justify-content-end py-3">
            <Pagination aria-label="Page navigation example">
                <PaginationItem disabled style={{ fontSize: '2rem' }}>
                    <PaginationLink first href="#" style={{ fontSize: '2rem' }} />
                </PaginationItem>
                <PaginationItem disabled style={{ fontSize: '2rem' }}>
                    <PaginationLink href="#" previous style={{ fontSize: '2rem' }} />
                </PaginationItem>
                <PaginationItem active style={{ fontSize: '2rem' }}>
                    <PaginationLink href="#" style={{ fontSize: '2rem' }}>
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" style={{ fontSize: '2rem' }}>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" style={{ fontSize: '2rem' }}>
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" style={{ fontSize: '2rem' }}>
                        4
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" style={{ fontSize: '2rem' }}>
                        5
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" next style={{ fontSize: '2rem' }} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" last style={{ fontSize: '2rem' }} />
                </PaginationItem>
            </Pagination>
        </div>
    );
};

export default PaginationProducts;
