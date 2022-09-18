import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BASE_URL } from '~/constants/env';

const Sidebar = () => {
    const [postList, setpostList] = useState([]);

    const getCategory = () => {
        fetch(`${BASE_URL}/categories?filters[is_menu][$eq]=true`)
            .then((res) => res.json())
            .then((res) => {
                setpostList(res.data);
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
                {postList.map((item) => (
                    <ListGroupItem
                        action
                        href="#"
                        tag="a"
                        key={item.id}
                        className="text-capitalize"
                        style={{ border: 'none', backgroundColor: '#f7f7f7' }}
                    >
                        <span className="text-primary " style={{ fontWeight: '600' }}>
                            {item.attributes.group_number}{' '}
                        </span>
                        {item.attributes.name}
                    </ListGroupItem>
                ))}
            </ListGroup>
            <hr />
        </div>
    );
};

export default Sidebar;
