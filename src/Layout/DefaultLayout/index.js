import React from 'react';
import Announcement from '~/components/Header/Announcement';
import Navbar from '~/components/Header/Navbar';
import Navbar2 from '~/components/Header/Navbar2';
import Footer from '~/pages/Footer';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Navbar2 />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
