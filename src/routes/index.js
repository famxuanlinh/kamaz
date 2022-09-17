import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { DefaultLayout, MainLayout } from '~/Layout';
import LogIn from '~/pages/LogIn';

const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
    { path: '/dang-nhap', component: LogIn, layout: DefaultLayout },
    // { path: '/dang-ky', component: Register, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
