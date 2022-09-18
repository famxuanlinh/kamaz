import Home from '~/pages/Home';
import { DefaultLayout, MainLayout } from '~/Layout';
import LogIn from '~/pages/LogIn';
import ProductLayout from '~/Layout/ProductLayout';
import Categories from '~/pages/Categories';
import ProductPage from '~/pages/ProductPage';

const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/danh-muc/dong-co', component: Categories, layout: MainLayout },
    { path: '/san-pham/loa', component: ProductPage, layout: MainLayout },
    { path: '/dang-nhap', component: LogIn, layout: DefaultLayout },
    // { path: '/dang-ky', component: Register, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
