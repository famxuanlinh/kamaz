import React from 'react';
import CarouselSlide from '~/components/CarouselSlide';
import ModalMenu from '~/components/OffcanvasMenu';
import OffcanvasMenu from '~/components/ProductItem';

const Home = () => {
    return (
        <div>
            <CarouselSlide />
            <ModalMenu />
            <OffcanvasMenu />
        </div>
    );
};

export default Home;
