import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className="container">
            <nav className="navbar d-flex row">
                <Link className="navbar-brand col" to="/">
                    <img src="https://kamaztrade.com/sites/all/themes/jipn/images/logo.png" alt="kamaz" height="60" />
                </Link>
                <form className="d-none d-lg-flex border border-1 rounded col-6 p-0">
                    <input
                        className="form-control me-2 p-3 border-0"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{ fontSize: '14px', border: 'none' }}
                    />
                    <button className="btn border-0 btn-dark rounded-end px-5" type="submit">
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '24px' }} />
                    </button>
                </form>
                <div className="col d-flex flex-row-reverse">
                    <div className="d-flex align-items-center">
                        {true ? (
                            <div className="d-flex ps-4 ">
                                <Link to="/gio-hang" className="px-4 position-relative">
                                    <FontAwesomeIcon icon={faHeart} style={{ fontSize: '24px' }} />
                                    <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                                        99<span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                                <Link to="/gio-hang" className="px-4 pe-4 position-relative">
                                    <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '24px' }} />
                                    <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                                        99<span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                                <Dropdown
                                    isOpen={dropdownOpen}
                                    toggle={toggle}
                                    direction={direction}
                                    style={{ fontSize: '1.6 rem' }}
                                >
                                    <DropdownToggle
                                        caret
                                        size="lg"
                                        style={{ backgroundColor: 'transparent', color: 'black' }}
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
