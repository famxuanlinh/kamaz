import React from 'react';
import Footer from '~/pages/Footer';
import Navbar from '~/components/Header/Navbar';
import Announcement from '~/components/Header/Announcement';
import Navbar2 from '~/components/Header/NavbarMenu';
import Search from '~/components/Search';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Announcement />
            <Navbar />
            {/* <div className="d-md-block d-lg-none py-3" style={{ backgroundColor: '#fff' }}>
                <Search />
            </div> */}
            <Navbar2 />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
