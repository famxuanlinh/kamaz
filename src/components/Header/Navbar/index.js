import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Search from '~/components/Search';
import OffcanvasWishlist from '~/components/OffcanvasWishlist';
import OffcanvasCart from '~/components/OffcanvasCart';
import OffcanvasMenu from '~/components/OffcanvasMenu';
import { useLogin } from '~/contexts/Login/LoginContext';
import Search1 from '~/components/Search1';

const wrapper = {
    backgroundColor: 'white',
    width: '100%',
};

const Navbar = ({ direction, ...args }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { userInfo, handleLogout } = useLogin();

    // const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div className="sticky-top" style={wrapper}>
            <div className="container">
                <nav className="navbar d-flex row">
                    <div className="d-flex col align-items-center">
                        <OffcanvasMenu />
                        <Link className="navbar-brand " to="/">
                            <img src="/logo.png" alt="kamaz" height="60" />
                        </Link>
                    </div>
                    <div className="col-6 d-none d-lg-flex" style={{ width: '465px' }}>
                        <Search className="p-0" show={true} />
                    </div>
                    <div className="col d-flex flex-row-reverse">
                        <div className="d-flex align-items-center">
                            <OffcanvasWishlist />
                            <OffcanvasCart />
                            {userInfo ? (
                                <div className="d-none d-sm-flex ps-4 ">
                                    <div className="dropdown1">
                                        <button
                                            // caret
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            // id="dropdownMenuButton5"
                                            // data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            // size="lg"
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'black',
                                                border: '0',
                                                fontSize: '1.8rem',
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faUser} style={{ paddingRight: '8px' }} />{' '}
                                            <span>{userInfo.username}</span>
                                        </button>
                                        <div
                                            {...args}
                                            // aria-labelledby="dropdownMenuButton5"
                                            // end
                                            className="dropdown-menu "
                                            style={{ fontSize: '1.8rem', zIndex: '9999', borderRadius: '0.5rem' }}
                                        >
                                            <ul className="p-0">
                                                <li className="dropdown-item">
                                                    <Link className="px-4" to="/quan-li-tai-khoan">
                                                        Quản lý tài khoản
                                                    </Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="px-4" to="/thay-doi-mat-khau">
                                                        Thay đổi mật khẩu
                                                    </Link>
                                                </li>
                                                <li className="dropdown-item">
                                                    <Link className="px-4" to="/don-hang">
                                                        Đơn hàng
                                                    </Link>
                                                </li>
                                                <li className=" dropdown-item border-top">
                                                    <Button
                                                        className="px-4"
                                                        style={{
                                                            color: 'red',
                                                            border: 'none',
                                                            backgroundColor: 'transparent',
                                                            fontSize: '1.8rem',
                                                        }}
                                                        onClick={handleLogout}
                                                    >
                                                        Đăng xuất
                                                    </Button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Link to="/dang-ki">
                                        <button
                                            className="btn "
                                            style={{ border: 'none', fontSize: '1.8rem', paddingRight: '1.4rem' }}
                                        >
                                            Đăng Kí
                                        </button>
                                    </Link>
                                    <Link to="/dang-nhap">
                                        <button className="btn btn-primary" style={{ fontSize: '1.8rem' }}>
                                            Đăng Nhập
                                        </button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
