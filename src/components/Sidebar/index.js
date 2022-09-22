import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BASE_URL } from '~/constants/env';

const Sidebar = () => {
    const [category, setCategory] = useState([]);

    const getCategory = () => {
        fetch(`${BASE_URL}/categories?filters[is_menu][$eq]=true`)
            .then((res) => res.json())
            .then((res) => {
                setCategory(res.data);
            });
    };

    useEffect(() => {
        getCategory();
    }, []);
    return (
        <div>
            <h2 style={{ fontWeight: '600' }} className="title-products-home">
                Danh mục sản phẩm
            </h2>
            <hr />
            <ListGroup>
                <Link to="/danh-muc/tat-ca-san-pham">
                    <ListGroupItem
                        href="#"
                        tag="a"
                        className="text-capitalize"
                        style={{
                            border: 'none',
                            backgroundColor: '#f7f7f7',
                            color: '#1f3f81',
                            fontSize: '1.8rem',
                            fontWeight: '600',
                        }}
                        action
                    >
                        Tất Cả Sản Phẩm
                    </ListGroupItem>
                </Link>
                {category.map((item, index) => (
                    <Link to={`/danh-muc/${item.attributes.slug}`} key={index}>
                        <ListGroupItem
                            action
                            key={item.id}
                            className="text-capitalize"
                            style={{ border: 'none', backgroundColor: '#f7f7f7' }}
                        >
                            <span className="text-primary " style={{ fontWeight: '600' }}>
                                {item.attributes.group_number}{' '}
                            </span>
                            {item.attributes.name}
                        </ListGroupItem>
                    </Link>
                ))}
            </ListGroup>
            <hr />
        </div>
    );
};

export default Sidebar;
