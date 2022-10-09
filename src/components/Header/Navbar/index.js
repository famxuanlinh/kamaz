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
                            <img
                                src="https://kamaztrade.com/sites/all/themes/jipn/images/logo.png"
                                alt="kamaz"
                                height="60"
                            />
                        </Link>
                    </div>
                    <div className="col-6 d-none d-lg-flex">
                        <Search className="p-0 w-60" />
                    </div>
                    <div className="col d-flex flex-row-reverse">
                        <div className="d-flex align-items-center">
                            {userInfo ? (
                                <div className="d-flex ps-4 ">
                                    <OffcanvasWishlist />
                                    <OffcanvasCart />
                                    <Dropdown isOpen={dropdownOpen} direction={direction}>
                                        <DropdownToggle
                                            caret
                                            size="lg"
                                            style={{
                                                backgroundColor: 'transparent',
                                                color: 'black',
                                                border: '0',
                                                fontSize: '1.8rem',
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faUser} style={{ paddingRight: '8px' }} />{' '}
                                            {userInfo.username}
                                        </DropdownToggle>
                                        <DropdownMenu
                                            {...args}
                                            end
                                            className="dropdown-menu dropdown-menu-lg-end shadow-lg py-4"
                                            style={{ fontSize: '1.8rem', zIndex: '9999', borderRadius: '0.5rem' }}
                                        >
                                            <div>
                                                <DropdownItem>
                                                    <Link className="px-4" to="/quan-li-tai-khoan">
                                                        Quản lý tài khoản
                                                    </Link>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <Link className="px-4" to="/thay-doi-mat-khau">
                                                        Thay đổi mật khẩu
                                                    </Link>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <Link className="px-4" to="/don-hang">
                                                        Đơn hàng
                                                    </Link>
                                                </DropdownItem>
                                                <DropdownItem className="border-top">
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
                                                </DropdownItem>
                                            </div>
                                        </DropdownMenu>
                                    </Dropdown>
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
                    {/* <div className="d-md-block d-lg-none my-3">
                        <Search className="p-0 w-60 " />
                    </div> */}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
