import Home from '~/pages/Home';
import { DefaultLayout, MainLayout } from '~/Layout';
import LogIn from '~/pages/LogIn';
import Categories from '~/pages/Categories';
import ProductPage from '~/pages/ProductPage';
import Register from '~/pages/Register';
import Cart from '~/pages/Cart';
import SearchPage from '~/pages/SearchPage';
import ManageUser from '~/pages/ManageUser';
import UpdatePassword from '~/pages/UpdatePassword';
import ForgotPassword from '~/pages/ForgotPassword';
import Orders from '~/pages/Orders';
import OrderDetail from '~/pages/OrderDetail';
import Repair from '~/pages/Repair';

const routes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/danh-muc/:slug', component: Categories, layout: MainLayout },
    { path: '/san-pham/:slug', component: ProductPage, layout: MainLayout },
    { path: '/tim-kiem', component: SearchPage, layout: MainLayout },
    { path: '/dang-nhap', component: LogIn, layout: DefaultLayout },
    { path: '/thay-doi-mat-khau', component: UpdatePassword, private: true, layout: DefaultLayout },
    { path: '/quen-mat-khau', component: ForgotPassword, private: true, layout: DefaultLayout },
    { path: '/quan-li-tai-khoan', component: ManageUser, private: true, layout: DefaultLayout },
    { path: '/dang-ki', component: Register, layout: DefaultLayout },
    { path: '/gio-hang', component: Cart, layout: DefaultLayout },
    { path: '/don-hang', component: Orders, private: true, layout: DefaultLayout },
    { path: '/don-hang/:id', component: OrderDetail, private: true, layout: DefaultLayout },
    { path: '/sua-chua/:slug', component: Repair, layout: DefaultLayout },
    { path: '/wishlist', component: Register, layout: DefaultLayout },
];

export { routes };
