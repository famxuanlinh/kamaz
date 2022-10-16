import { Navigate } from 'react-router-dom';
import getToken from '~/until/getToken';

const ProtectedRoute = ({ children, route }) => {
    const isAuthenticated = !!getToken();
    if (route.private === true) {
        return !isAuthenticated ? <Navigate to="/" /> : children;
    } else {
        return children;
    }
};

export default ProtectedRoute;
