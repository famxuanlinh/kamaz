import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import React from 'react';
import Footer from '~/pages/Footer';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
