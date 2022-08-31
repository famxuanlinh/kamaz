import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { DefaultLayout, MainLayout } from '~/Layout';

const publicRoutes = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
