import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: var(--primary-color);
    width: 100%;
`;

const Navbar2 = ({ direction, ...args }) => {
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
        <Wrapper className=" d-none d-lg-block">
            <div className="container py-2">
                <Navbar {...args} style={{ fontSize: '20px', color: 'white' }}>
                    <NavItem>
                        <NavLink href="/components/">Trang chủ</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Sửa chữa
                        </DropdownToggle>
                        <DropdownMenu end>
                            <div>
                                <Link to="/danh-muc/dong-co">
                                    <DropdownItem>Option 1</DropdownItem>
                                </Link>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </div>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar className="category-dropdown-menu">
                        <DropdownToggle nav caret>
                            Phụ tùng KAMAZ
                        </DropdownToggle>
                        <DropdownMenu
                            end
                            style={{
                                maxHeight: '70vh',
                                width: '562px',
                                flexWrap: 'wrap',
                                overflowWrap: 'break-word',
                                // display: 'flex',
                            }}
                        >
                            {postList.map((item) => (
                                <Link to="/danh-muc/dong-co" key={item.id}>
                                    <DropdownItem style={{ width: '280px' }}>
                                        <span>{item.attributes.group_number} </span>
                                        {item.attributes.name}
                                    </DropdownItem>
                                </Link>
                            ))}
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/components/">Thông tin về công ty</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Tuyển dụng</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Thông tin liên hệ</NavLink>
                    </NavItem>
                </Navbar>
            </div>
        </Wrapper>
    );
};

export default Navbar2;
