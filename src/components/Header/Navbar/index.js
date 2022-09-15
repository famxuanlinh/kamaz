import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Search from '~/components/Search';
import OffcanvasWishlist from '~/components/OffcanvasWishlist';
import OffcanvasCart from '~/components/OffcanvasCart';

const Offcanvas = [];

const Navbar = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className="container">
            <nav className="navbar d-flex row">
                <Link className="navbar-brand col" to="/">
                    <img src="https://kamaztrade.com/sites/all/themes/jipn/images/logo.png" alt="kamaz" height="60" />
                </Link>
                <div className="col-6">
                    <Search className="d-none d-lg-flex p-0 w-60" />
                </div>
                <div className="col d-flex flex-row-reverse">
                    <div className="d-flex align-items-center">
                        {true ? (
                            <div className="d-flex ps-4 ">
                                <OffcanvasWishlist />
                                <OffcanvasCart />
                                <Dropdown
                                    isOpen={dropdownOpen}
                                    toggle={toggle}
                                    direction={direction}
                                    style={{ fontSize: '1.6 rem' }}
                                >
                                    <DropdownToggle
                                        caret
                                        size="lg"
                                        style={{ backgroundColor: 'transparent', color: 'black', border: '0' }}
                                    >
                                        <FontAwesomeIcon icon={faUser} style={{ paddingRight: '8px' }} /> Fam Linh
                                    </DropdownToggle>
                                    <DropdownMenu
                                        {...args}
                                        end
                                        className="dropdown-menu dropdown-menu-lg-end"
                                        style={{ fontSize: '1.6rem', zIndex: '9999' }}
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
                        ) : (
                            <>
                                <Link to="/dang-ki">
                                    <button className="btn " style={{ border: 'none', fontSize: '14px' }}>
                                        Đăng Kí
                                    </button>
                                </Link>
                                <Link to="/dang-nhap">
                                    <button className="btn btn-warning" style={{ fontSize: '14px' }}>
                                        Đăng Nhập
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
