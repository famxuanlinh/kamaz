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
    const [service, setService] = useState([]);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const getCategory = () => {
        fetch(`${BASE_URL}/categories?filters[is_menu][$eq]=true`)
            .then((res) => res.json())
            .then((res) => {
                setpostList(res.data);
            });
    };

    const getRepair = () => {
        fetch(`${BASE_URL}/repairs`)
            .then((res) => res.json())
            .then((res) => {
                setService(res.data);
            });
    };

    useEffect(() => {
        getCategory();
        getRepair();
    }, []);

    return (
        <Wrapper className=" d-none d-lg-block">
            <div className="container py-2">
                <Navbar {...args} style={{ fontSize: '22px', color: 'white' }} className="text-capitalize">
                    <NavItem>
                        <NavLink href="/">Trang chủ</NavLink>
                    </NavItem>
                    <div className="d-flex">
                        <div className="dropdown1">
                            <div
                                className="d-flex align-items-center"
                                // id="dropdownMenuButton2"
                                // data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Sửa chữa
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ paddingLeft: '10px', alignItems: 'center' }}
                                />
                            </div>
                            <ul
                                className="dropdown-menu"
                                // aria-labelledby="dropdownMenuButton2"
                                {...args}
                                style={{
                                    maxHeight: '70vh',
                                    width: '362px',
                                    flexWrap: 'wrap',
                                    overflowWrap: 'break-word',
                                    // display: 'flex',
                                }}
                                // className="category-dropdown-menu"
                            >
                                {service.map((item) => (
                                    <Link to={`/sua-chua/${item.attributes.slug}`} key={item.id}>
                                        <li className="dropdown-item text-capitalize" style={{ width: '360px' }}>
                                            <span className="text-primary">{item.attributes.group_number} </span>
                                            {item.attributes.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="dropdown1">
                            <div
                                className="d-flex align-items-center"
                                // id="dropdownMenuButton3"
                                // data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Phụ tùng KAMAZ
                                <FontAwesomeIcon
                                    icon={faCaretDown}
                                    style={{ paddingLeft: '10px', alignItems: 'center' }}
                                />
                            </div>
                            <ul
                                className="dropdown-menu"
                                // aria-labelledby="dropdownMenuButton3"
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
                                <Link to="/danh-muc/tat-ca-san-pham">
                                    <li
                                        className="dropdown-item text-capitalize"
                                        style={{
                                            width: '260px',
                                            color: '#1f3f81',
                                            fontSize: '1.8rem',
                                            fontWeight: '600',
                                        }}
                                    >
                                        Tất Cả Sản Phẩm
                                    </li>
                                </Link>
                                {postList.map((item) => (
                                    <Link to={`/danh-muc/${item.attributes.slug}`} key={item.id}>
                                        <li className="dropdown-item text-capitalize" style={{ width: '260px' }}>
                                            <span className="text-primary" style={{ fontWeight: '600' }}>
                                                {item.attributes.group_number}{' '}
                                            </span>
                                            {item.attributes.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <NavItem>
                        <NavLink href="/components/">Về chúng tôi</NavLink>
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
