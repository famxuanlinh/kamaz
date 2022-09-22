import React, { useEffect, useState } from 'react';
import './NavbarMenu.css';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
} from 'reactstrap';

import styled from 'styled-components';
import { BASE_URL } from '~/constants/env';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    background-color: var(--primary-color);
    width: 100%;
`;

const NavbarMenu = ({ direction, ...args }) => {
    const [postList, setpostList] = useState([]);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    // const toggle = () => setDropdownOpen((prevState) => !prevState);

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
        <Wrapper className=" d-none d-lg-block">
            <div className="container py-2">
                <Navbar {...args} style={{ fontSize: '20px', color: 'white' }} className="text-capitalize">
                    <NavItem>
                        <NavLink href="/">Trang chủ</NavLink>
                    </NavItem>
                    <div className="d-flex">
                        <Dropdown isOpen={dropdownOpen} direction={direction}>
                            <div className="d-flex align-items-center">
                                Sửa chữa
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ paddingLeft: '10px', alignItems: 'center' }}
                                />
                            </div>
                            <DropdownMenu
                                {...args}
                                style={{
                                    maxHeight: '70vh',
                                    width: '522px',
                                    flexWrap: 'wrap',
                                    overflowWrap: 'break-word',
                                    // display: 'flex',
                                }}
                                // className="category-dropdown-menu"
                            >
                                {postList.map((item) => (
                                    <Link to={`/danh-muc/${item.slug}`} key={item.id}>
                                        <DropdownItem style={{ width: '260px' }} className="text-capitalize">
                                            <span className="text-primary">{item.attributes.group_number} </span>
                                            {item.attributes.name}
                                        </DropdownItem>
                                    </Link>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <div className="d-flex">
                        <Dropdown isOpen={dropdownOpen} direction={direction}>
                            <div className="d-flex align-items-center">
                                Phụ tùng KAMAZ
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ paddingLeft: '10px', alignItems: 'center' }}
                                />
                            </div>
                            <DropdownMenu
                                {...args}
                                style={{
                                    maxHeight: '70vh',
                                    width: '522px',
                                    flexWrap: 'wrap',
                                    overflowWrap: 'break-word',
                                    // display: 'flex',
                                }}
                                // className="category-dropdown-menu"
                            >
                                <Link to="/danh-muc/dong-co">
                                    <DropdownItem
                                        style={{
                                            width: '260px',
                                            color: '#1f3f81',
                                            fontSize: '1.8rem',
                                            fontWeight: '600',
                                        }}
                                        className="text-capitalize"
                                    >
                                        Tất Cả Sản Phẩm
                                    </DropdownItem>
                                </Link>
                                {postList.map((item) => (
                                    <Link to={`/danh-muc/${item.attributes.slug}`} key={item.id}>
                                        <DropdownItem style={{ width: '260px' }} className="text-capitalize">
                                            <span className="text-primary" style={{ fontWeight: '600' }}>
                                                {item.attributes.group_number}{' '}
                                            </span>
                                            {item.attributes.name}
                                        </DropdownItem>
                                    </Link>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>

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

export default NavbarMenu;
