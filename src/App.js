import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { DefaultLayout } from './Layout';
import { Fragment } from 'react';
import { CartProvider } from './contexts/Cart/CartContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { LoginProvider } from './contexts/Login/LoginContext';
import { SearchProvider } from './contexts/SearchContext/SearchContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <Router>
            <SearchProvider>
                <LoginProvider>
                    <CartProvider>
                        <div className="App">
                            <Routes>
                                {routes.map((route, index) => {
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
                                                <ProtectedRoute route={route}>
                                                    <Layout>
                                                        <Page />
                                                    </Layout>
                                                </ProtectedRoute>
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
