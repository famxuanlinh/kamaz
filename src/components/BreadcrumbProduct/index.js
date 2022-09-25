import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbProduct = () => {
    return (
        <div className="py-3">
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#" className="text-dark">
                        Home
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbProduct;
