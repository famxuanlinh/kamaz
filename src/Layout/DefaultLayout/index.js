import Header from '~/components/Header';
import Sidebar from '~/components/Sidebar';

import React from 'react';
import Home from '~/pages/Home';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <Home />
            <div className="content">{children}</div>
        </div>
    );
};

export default DefaultLayout;
