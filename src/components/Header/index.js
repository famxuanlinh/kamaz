import React from 'react';
import Announcement from './Announcement';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';

const Header = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Navbar2 />
        </div>
    );
};

export default Header;
