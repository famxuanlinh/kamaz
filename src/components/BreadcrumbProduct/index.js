import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbProduct = () => {
    return (
        <div className="py-5">
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">Home</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbProduct;
