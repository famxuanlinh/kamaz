import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const List = styled.ul`
    display: flex;
`;
const ListItem = styled.li``;

const Navbar2 = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className="container">
            <List>
                <ListItem>
                    <Link to="/">Trang chủ</Link>
                </ListItem>
                <ListItem>
                    <div className="d-flex ps-4 ">
                        <Dropdown
                            isOpen={dropdownOpen}
                            toggle={toggle}
                            direction={direction}
                            style={{ fontSize: '1.6 rem' }}
                        >
                            <DropdownToggle caret size="lg" style={{ backgroundColor: 'transparent', color: 'black' }}>
                                Fam Linh
                            </DropdownToggle>
                            <DropdownMenu
                                {...args}
                                end
                                className="dropdown-menu dropdown-menu-lg-end"
                                style={{ fontSize: '1.6rem' }}
                            >
                                <DropdownItem>
                                    <Link to="/">Quản lý tài khoản</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/">Thay đổi mật khẩu</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/">Đơn hàng</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/">Đăng xuất</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </ListItem>
                <ListItem>
                    <Link to="/">Phụ tùng</Link>
                </ListItem>
                <ListItem>
                    <Link to="/">Thông tin về chúng tôi</Link>
                </ListItem>
                <ListItem>
                    <Link to="/">Liên hệ</Link>
                </ListItem>
            </List>
        </div>
    );
};

export default Navbar2;
