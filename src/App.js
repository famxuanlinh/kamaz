import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './Layout';
import { Fragment } from 'react';
import { CartProvider } from './contexts/Cart/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LoginProvider } from './contexts/Login/LoginContext';
import { SearchProvider } from './contexts/SearchContext/SearchContext';

function App() {
    // const { userInfo } = useLogin();
    // console.log('🚀 ~ file: App.js ~ line 13 ~ App ~ userInfo', userInfo);
    // const PrivateRoute = ({ children }) => {
    //     return userInfo ? children : <Navigate to="/dang-nhap" />;
    // };

    // const PublicRoute = ({ children }) => {
    //     return userInfo ? <Navigate to="/" /> : children;
    // };

    return (
        <Router>
            <SearchProvider>
                <LoginProvider>
                    <CartProvider>
                        <div className="App">
                            <Routes>
                                {publicRoutes.map((route, index) => {
                                    const Page = route.component;
                                    let Layout = DefaultLayout;

                                    if (route.layout) {
                                        Layout = route.layout;
                                    } else if (route.layout === null) {
                                        Layout = Fragment;
                                    }

                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            }
                                        />
                                    );
                                })}
                            </Routes>
                            <ToastContainer hideProgressBar />
                        </div>
                    </CartProvider>
                </LoginProvider>
            </SearchProvider>
        </Router>
    );
}

export default App;
