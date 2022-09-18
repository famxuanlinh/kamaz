import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Sidebar = () => {
    const [postList, setpostList] = useState([]);

    const getCategory = () => {
        fetch(`http://localhost:1337/api/categories`)
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
            <h2>Danh mục sản phẩm</h2>
            <hr />
            <ListGroup>
                {postList.map((item) => (
                    <ListGroupItem
                        action
                        href="#"
                        tag="a"
                        key={item.id}
                        style={{ border: 'none', backgroundColor: '#f7f7f7' }}
                    >
                        <span>{item.attributes.group_number} </span>
                        {item.attributes.name}
                    </ListGroupItem>
                ))}
            </ListGroup>
            <hr />
        </div>
    );
};

export default Sidebar;
