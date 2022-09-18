import React from 'react';
import Announcement from './Announcement';
import Navbar from './Navbar';
import NavbarMenu from './NavbarMenu';

const Header = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <NavbarMenu />
        </div>
    );
};

export default Header;
