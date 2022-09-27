import Home from '~/pages/Home';
import { DefaultLayout, MainLayout } from '~/Layout';
import LogIn from '~/pages/LogIn';
import Categories from '~/pages/Categories';
import ProductPage from '~/pages/ProductPage';
import Register from '~/pages/Register';
import Cart from '~/pages/Cart';
import SearchPage from '~/pages/SearchPage';

const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/danh-muc/:slug', component: Categories, layout: MainLayout },
    { path: '/san-pham/:slug', component: ProductPage, layout: MainLayout },
    { path: '/tim-kiem', component: SearchPage, layout: MainLayout },
    { path: '/dang-nhap', component: LogIn, layout: DefaultLayout },
    { path: '/dang-ki', component: Register, layout: DefaultLayout },
    { path: '/gio-hang', component: Cart, layout: DefaultLayout },
    { path: '/wishlist', component: Register, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
